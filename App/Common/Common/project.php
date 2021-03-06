<?php
//dezend by http://www.yunlu99.com/
function getProjectType($pid)
{
	$str = '到期还本还息';

	switch ($pid) {
	case 1:
		$str = '每日返息,到期还本';
		break;

	case 2:
		$str = '每周返息,到期还本';
		break;

	case 3:
		$str = '每月返息,到期还本';
		break;

	case 4:
		$str = '每日复利,保本保息';
		break;

	case 5:
		$str = '到期还本还息';
		break;	
	case 6:
		$str = '每小时返息,到期还本';
		break;
	}

	return $str;
}

function setProjectType()
{
	$data = array(
		array('id' => 1, 'name' => '每日返息,到期还本'),
		array('id' => 2, 'name' => '每周返息,到期还本'),
		array('id' => 3, 'name' => '每月返息,到期还本'),
		array('id' => 4, 'name' => '每日复利,保本保息'),
		array('id' => 5, 'name' => '到期还本还息'),
		array('id' => 6, 'name' => '每小时返息,到期还本')
		);
	return $data;
}
function getprojectclass()
{
	$invest = getData('project_class', 'all');

	return $invest;
}

function getprojectclassname($id)
{
	$data = getData('project_class', 1, 'id=\'' . $id . '\'');

	return $data['name'];
}
function qiangetprojectclassname($id)
{
	$data = getData('item', 'all', 'class=\'' . $id . '\'');
   
	return $data;  
}
function getProjectPercent($pid)
{
	$data = getData('item', 1, 'id=\'' . $pid . '\'');
	$pid = $data['id'];
	$percent = $data['percent'];
	$invest = getData('invest', 'all', 'pid=\'' . $pid . '\'');
	$investMoney = 0;

	foreach ($invest as $i) {
		$investMoney += $i['money'];
	}

	$actual = $investMoney / ($data['total'] * 10000) * 100;
	$total = $actual + $percent;

	if (100 < $total) {
		return 100;
	}

	return $total;
}

function getProjectPerson($pid)
{
}

function getProjectNum($pid)
{
}

function getProjectSurplus($pid)
{
	$percent = getprojectpercent($pid);
	$data = getData('item', 1, 'id=\'' . $pid . '\'');
	$surplus = (100 - $percent) * $data['total'] * 100;

	if ($surplus < 0) {
		return 0;
	}

	return $surplus;
}

function getRandPhoneNum()
{
	$p = array(3, 5, 6, 7, 8, 9);
	$r = rand(0, 5);
	return '1' . $p[$r] . '****' . rand(10, 99);
}

function getInvestStatus($id)
{
	$invest = getData('invest_list', 'all', 'status = 0 AND iid = \'' . $id . '\'');

	if (0 < count($invest)) {
		return '未完成';
	}

	return '已完成';
}

function getInvestSchedule($id)
{
}

function getInvestMoney($id)
{
	$invest = getData('invest_list', 'all', 'iid = \'' . $id . '\' AND pay1 <> 0');
	$money = 0;

	foreach ($invest as $i) {
		$money += $i['money1'];
	}

	return $money;
}

function getFuliIncome($money, $rate, $day)
{
	$sum = $money;
	$i = 0;

	while ($i < $day) {
		$sum = $sum + $sum * $rate / 100;
		++$i;
	}

	return round($sum - $money, 2);
}

function getInvestList($id, $money, $uid)
{
	$item = getData('item', 1, 'id=\'' . $id . '\'');
	$title = $item['title'];
	$type = $item['type'];
	$day = $item['day'];
	$rate = $item['rate'];
	$mid = getUserField($uid, 'member');
	$member = getData('user_member', 1, 'id=\'' . $mid . '\'');
	if (!empty($member) && 0 < $member['rate']) {
		$rate += $member['rate'];
	}

	$invest = array('uid' => $uid, 'pid' => $id, 'title' => $title, 'money' => $money, 'day' => $day, 'rate' => $rate, 'type1' => $type, 'type2' => getprojecttype($type), 'status' => 0, 'time' => date('Y-m-d H:i:s'));
	setNumber('user', 'value', $money, 1, 'id=\'' . $uid . '\'');
	setUserMember($uid, getUserField($uid, 'value'));
	setInvestReward($uid, $money, $id);
	$iid = addData('invest', $invest);

	if (!empty($iid)) {
		if ($type == 1) {
			$base = 1;
		}
		else if ($type == 2) {
			$base = 7;
		}
		else if ($type == 3) {
			$base = 30;
		}
		else if ($type == 4) {
			$base = 1;
		}else if ($type == 5) {
			$base = $day;
		}else if ($type == 6) {
			$base = 1;
		}else{
			$base = 0;
			
		}

		$day2 = $day / $base;
		$bool = false;
		$money2 = $money;
		$i = 1;

		while ($i <= $day2) {
			$time1 = $i * $base;
			if ($type == 6){
				$timezone = date('Y-m-d H:i:s', strtotime('+' . $time1 . ' hour'));
			}else{
				$timezone = date('Y-m-d H:i:s', strtotime('+' . $time1 . ' day'));
				
			}
			$data = array('uid' => $uid, 'iid' => $iid, 'num' => $i, 'title' => $title, 'money1' => round($money * $rate / 100 * $base, 2), 'money2' => 0, 'time1' => $timezone, 'time2' => '0000-00-00 00:00:00', 'pay1' => $money * $rate / 100 * $base, 'pay2' => 0, 'status' => 0);

			if ($type == 4) {
				$data['money1'] = $money2 - $money + round($money2 * $rate / 100 * $base, 2);
				$data['money2'] = $money;
				$data['pay1'] = 0;
				$money2 += round($money2 * $rate / 100 * $base, 2);
			}

			if ($i == $day2) {
				$data['pay1'] += $money;
				$data['money2'] += $money;
			}

			if ($i == $day2 && $type == 4) {
				$data['pay1'] = $money + $data['money1'];
				$data['money2'] = $money;
			}

			if (addData('invest_list', $data)) {
				$bool = true;
			}

			++$i;
		}

		return $bool;
	}

	return false;
}

function getItemField($id, $field)
{
	$item = getData('item', 1, 'id = \'' . $id . '\'');
	return $item[$field];
}

function getInvestPayment()
{
	$recharge = getData('recharge', 'all');
	$pay = array();

	foreach ($recharge as $r) {
		$pay[] = $r['type'];
	}

	$pay = array_unique($pay);
	return $pay;
}
function setInvestReward($uid, $money , $id )
{

	$xm=M("item")->where("id=".$id)->find();
	$t1 = getUserField($uid, 'top') ?: 0;
	 
	if (0 < $xm["frbl"] && !empty($t1)) {
		
		$top1 = round($xm['frbl'] * $money / 100, 2);
		addFinance($t1, $top1, '推荐会员购买' . $money . '元奖励' . $top1 . '元！', 1, getUserField($t1, 'money'));
		setNumber('user', 'money', $top1, 1, 'id=\'' . $t1 . '\'');
		setNumber('user', 'income', $top1, 1, 'id=\'' . $t1 . '\'');
	}
 
}


function setInvestReward_old($uid, $money )
{
	$reward = getData('reward', 1);
	$top1 = round($reward['invest1'] * $money / 100, 2);
	$top2 = round($reward['invest2'] * $money / 100, 2);
	$top3 = round($reward['invest3'] * $money / 100, 2);
	$top4 = round($reward['invest4'] * $money / 100, 2);
	$top5 = round($reward['invest5'] * $money / 100, 2);
	$top6 = round($reward['invest6'] * $money / 100, 2);
	$top7 = round($reward['invest7'] * $money / 100, 2);
	$top8 = round($reward['invest8'] * $money / 100, 2);
	$top9 = round($reward['invest9'] * $money / 100, 2);
	$top10 = round($reward['invest10'] * $money / 100, 2);
	$top11 = round($reward['invest11'] * $money / 100, 2);
	$top12 = round($reward['invest12'] * $money / 100, 2);
	$top13 = round($reward['invest13'] * $money / 100, 2);
	$top14 = round($reward['invest14'] * $money / 100, 2);
	$top15 = round($reward['invest15'] * $money / 100, 2);
	$top16 = round($reward['invest16'] * $money / 100, 2);
	$top17 = round($reward['invest17'] * $money / 100, 2);
	$top18 = round($reward['invest18'] * $money / 100, 2);
	$top19 = round($reward['invest19'] * $money / 100, 2);
	$top20 = round($reward['invest20'] * $money / 100, 2);
	$t1 = getUserField($uid, 'top') ?: 0;
	$t2 = getUserField($t1, 'top') ?: 0;
	$t3 = getUserField($t2, 'top') ?: 0;
	$t4 = getUserField($t3, 'top') ?: 0;
	$t5 = getUserField($t4, 'top') ?: 0;
	$t6 = getUserField($t5, 'top') ?: 0;
	$t7 = getUserField($t6, 'top') ?: 0;
	$t8 = getUserField($t7, 'top') ?: 0;
	$t9 = getUserField($t8, 'top') ?: 0;
	$t10 = getUserField($t9, 'top') ?: 0;
	$t11 = getUserField($t10, 'top') ?: 0;
	$t12 = getUserField($t11, 'top') ?: 0;
	$t13 = getUserField($t12, 'top') ?: 0;
	$t14 = getUserField($t13, 'top') ?: 0;
	$t15 = getUserField($t14, 'top') ?: 0;
	$t16 = getUserField($t15, 'top') ?: 0;
	$t17 = getUserField($t16, 'top') ?: 0;
	$t18 = getUserField($t17, 'top') ?: 0;
	$t19 = getUserField($t18, 'top') ?: 0;
	$t20 = getUserField($t19, 'top') ?: 0;
	if (0 < $top1 && !empty($t1)) {
		addFinance($t1, $top1, '推荐会员投资' . $money . '元奖励' . $top1 . '元！', 1, getUserField($t1, 'money'));
		setNumber('user', 'money', $top1, 1, 'id=\'' . $t1 . '\'');
		setNumber('user', 'income', $top1, 1, 'id=\'' . $t1 . '\'');
	}

	if (0 < $top2 && !empty($t2)) {
		addFinance($t2, $top2, '推荐会员投资' . $money . '元奖励' . $top2 . '元！', 1, getUserField($t2, 'money'));
		setNumber('user', 'money', $top2, 1, 'id=\'' . $t2 . '\'');
		setNumber('user', 'income', $top2, 1, 'id=\'' . $t2 . '\'');
	}

	if (0 < $top3 && !empty($t3)) {
		addFinance($t3, $top3, '推荐会员投资' . $money . '元奖励' . $top3 . '元！', 1, getUserField($t3, 'money'));
		setNumber('user', 'money', $top3, 1, 'id=\'' . $t3 . '\'');
		setNumber('user', 'income', $top3, 1, 'id=\'' . $t3 . '\'');
	}
	
	if (0 < $top4 && !empty($t4)) {
		addFinance($t4, $top4, '推荐会员投资' . $money . '元奖励' . $top4 . '元！', 1, getUserField($t4, 'money'));
		setNumber('user', 'money', $top4, 1, 'id=\'' . $t4 . '\'');
		setNumber('user', 'income', $top4, 1, 'id=\'' . $t4 . '\'');
	}
	
	if (0 < $top5 && !empty($t5)) {
		addFinance($t5, $top5, '推荐会员投资' . $money . '元奖励' . $top5 . '元！', 1, getUserField($t5, 'money'));
		setNumber('user', 'money', $top5, 1, 'id=\'' . $t5 . '\'');
		setNumber('user', 'income', $top5, 1, 'id=\'' . $t5 . '\'');
	}
	
	if (0 < $top6 && !empty($t6)) {
		addFinance($t6, $top6, '推荐会员投资' . $money . '元奖励' . $top6 . '元！', 1, getUserField($t6, 'money'));
		setNumber('user', 'money', $top6, 1, 'id=\'' . $t6 . '\'');
		setNumber('user', 'income', $top6, 1, 'id=\'' . $t6 . '\'');
	}
	
	if (0 < $top7 && !empty($t7)) {
		addFinance($t7, $top7, '推荐会员投资' . $money . '元奖励' . $top7 . '元！', 1, getUserField($t7, 'money'));
		setNumber('user', 'money', $top7, 1, 'id=\'' . $t7 . '\'');
		setNumber('user', 'income', $top7, 1, 'id=\'' . $t7 . '\'');
	}
	
	if (0 < $top8 && !empty($t8)) {
		addFinance($t8, $top8, '推荐会员投资' . $money . '元奖励' . $top8 . '元！', 1, getUserField($t8, 'money'));
		setNumber('user', 'money', $top8, 1, 'id=\'' . $t8 . '\'');
		setNumber('user', 'income', $top8, 1, 'id=\'' . $t8 . '\'');
	}
	
	if (0 < $top9 && !empty($t9)) {
		addFinance($t9, $top9, '推荐会员投资' . $money . '元奖励' . $top9 . '元！', 1, getUserField($t9, 'money'));
		setNumber('user', 'money', $top9, 1, 'id=\'' . $t9 . '\'');
		setNumber('user', 'income', $top9, 1, 'id=\'' . $t9 . '\'');
	}
	
	if (0 < $top10 && !empty($t10)) {
		addFinance($t10, $top10, '推荐会员投资' . $money . '元奖励' . $top10 . '元！', 1, getUserField($t10, 'money'));
		setNumber('user', 'money', $top10, 1, 'id=\'' . $t10 . '\'');
		setNumber('user', 'income', $top10, 1, 'id=\'' . $t10 . '\'');
	}
	
	if (0 < $top11 && !empty($t11)) {
		addFinance($t11, $top11, '推荐会员投资' . $money . '元奖励' . $top11 . '元！', 1, getUserField($t11, 'money'));
		setNumber('user', 'money', $top11, 1, 'id=\'' . $t11 . '\'');
		setNumber('user', 'income', $top11, 1, 'id=\'' . $t11 . '\'');
	}
	
	if (0 < $top12 && !empty($t12)) {
		addFinance($t12, $top12, '推荐会员投资' . $money . '元奖励' . $top12 . '元！', 1, getUserField($t12, 'money'));
		setNumber('user', 'money', $top12, 1, 'id=\'' . $t12 . '\'');
		setNumber('user', 'income', $top12, 1, 'id=\'' . $t12 . '\'');
	}
	
	if (0 < $top13 && !empty($t13)) {
		addFinance($t13, $top13, '推荐会员投资' . $money . '元奖励' . $top13 . '元！', 1, getUserField($t13, 'money'));
		setNumber('user', 'money', $top13, 1, 'id=\'' . $t13 . '\'');
		setNumber('user', 'income', $top13, 1, 'id=\'' . $t13 . '\'');
	}
	
	if (0 < $top14 && !empty($t14)) {
		addFinance($t14, $top14, '推荐会员投资' . $money . '元奖励' . $top14 . '元！', 1, getUserField($t14, 'money'));
		setNumber('user', 'money', $top14, 1, 'id=\'' . $t14 . '\'');
		setNumber('user', 'income', $top14, 1, 'id=\'' . $t14 . '\'');
	}
	
	if (0 < $top15 && !empty($t15)) {
		addFinance($t15, $top15, '推荐会员投资' . $money . '元奖励' . $top15 . '元！', 1, getUserField($t15, 'money'));
		setNumber('user', 'money', $top15, 1, 'id=\'' . $t15 . '\'');
		setNumber('user', 'income', $top15, 1, 'id=\'' . $t15 . '\'');
	}
	
	if (0 < $top16 && !empty($t16)) {
		addFinance($t16, $top16, '推荐会员投资' . $money . '元奖励' . $top16 . '元！', 1, getUserField($t16, 'money'));
		setNumber('user', 'money', $top16, 1, 'id=\'' . $t16 . '\'');
		setNumber('user', 'income', $top16, 1, 'id=\'' . $t16 . '\'');
	}
	
	if (0 < $top17 && !empty($t17)) {
		addFinance($t17, $top17, '推荐会员投资' . $money . '元奖励' . $top17 . '元！', 1, getUserField($t17, 'money'));
		setNumber('user', 'money', $top17, 1, 'id=\'' . $t17 . '\'');
		setNumber('user', 'income', $top17, 1, 'id=\'' . $t17 . '\'');
	}
	
	if (0 < $top18 && !empty($t18)) {
		addFinance($t18, $top18, '推荐会员投资' . $money . '元奖励' . $top18 . '元！', 1, getUserField($t18, 'money'));
		setNumber('user', 'money', $top18, 1, 'id=\'' . $t18 . '\'');
		setNumber('user', 'income', $top18, 1, 'id=\'' . $t18 . '\'');
	}
	
	if (0 < $top19 && !empty($t19)) {
		addFinance($t19, $top19, '推荐会员投资' . $money . '元奖励' . $top19 . '元！', 1, getUserField($t19, 'money'));
		setNumber('user', 'money', $top19, 1, 'id=\'' . $t19 . '\'');
		setNumber('user', 'income', $top19, 1, 'id=\'' . $t19 . '\'');
	}
	
	if (0 < $top20 && !empty($t20)) {
		addFinance($t20, $top20, '推荐会员投资' . $money . '元奖励' . $top20 . '元！', 1, getUserField($t20, 'money'));
		setNumber('user', 'money', $top20, 1, 'id=\'' . $t20 . '\'');
		setNumber('user', 'income', $top20, 1, 'id=\'' . $t20 . '\'');
	}
}

?>
