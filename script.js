var is = confirm('Like or dislike all channel? Press the button "OK" for likes or "Cancel" for dislikes. To stop the script you should to reload the page.');
document.querySelector('paper-tab:nth-child(4)>div').click();
var exp = setInterval(()=>
{
	if (document.querySelector('ytd-channel-sub-menu-renderer') != null){
		document.querySelector("#play-all>ytd-button-renderer>a>#button>#text").click();
		clearInterval(exp);
		keks(0);
    }
}, 50);
function keks(i)
{
	var exp = setInterval(()=>
	{
		if (document.querySelector("#playlist-items[selected]>a") && document.querySelector("#playlist-items[selected]>a").getAttribute('href').slice(6,-8) == document.location.search.slice(0,i==0?undefined:-8)){
			clearInterval(exp);
			if(!i&&document.querySelector('.ytp-left-controls>span>div>div>div').getAttribute('style') != 'left: 0px;') 
				document.querySelector(".ytp-mute-button.ytp-button").click();
			if (document.querySelectorAll('#menu>ytd-menu-renderer>div>ytd-toggle-button-renderer>a>#button')[+!is].className == "style-scope ytd-toggle-button-renderer style-text")
				document.querySelectorAll('#menu>ytd-menu-renderer>div>ytd-toggle-button-renderer>a')[+!is].click();
			console.clear();
			var cnt = document.querySelector("#publisher-container>div>yt-formatted-string").textContent.split(' ')[3];
			console.warn('Progress - '+(i+1)+'/'+cnt);
			if (i+1 == cnt){
				clearInterval(exp);
				alert('Successful!');
			}
			else {
				document.querySelector("a.ytp-next-button.ytp-button").click()
				keks(i+1);
			}	
		}
	}, 100);
}