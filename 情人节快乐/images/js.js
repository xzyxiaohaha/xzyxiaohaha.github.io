var lusername	=location.search.split("=")[1];
if(!lusername){
	lusername="";
}
else{
	lusername=unescape(lusername);
}

function check(obj){
	if (obj.stra.value.length>8) {
		alert('̫��'); 
		return false;
	}
	if (obj.stra.value.length==0) {
		alert('��û������ѽ'); 
		return false;
	}
	var url	=location.protocol + "//" + location.host + location.pathname+"?stra="+escape(obj.stra.value);
	window.clipboardData.setData("Text",url);
	alert('��ַ�����ɲ��������ƺ��ˣ�ֱ��ճ����QQ��MSN������Ϳ�����\n\n ��������һ����ܾ�ϲ����췢�Ͱɣ�');
	window.location.replace(url);
	return false;
}