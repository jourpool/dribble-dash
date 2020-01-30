add this on index.html inside <script> tag:


		function resume() { 
			$(document).ready(function () {
				c2_callFunction("resume"); 
			});
		}

		function initData(reward) { 
			var item = JSON.parse(reward);
			if(item.length > 1) {
				if (c2_callFunction)
				c2_callFunction("initData", [item[0]["amount"],item[1]["amount"]]);
			}else {
				if (c2_callFunction)
				c2_callFunction("initData", [item[0]["amount"]]);
			}
		}

		function back() {
			Android.back();
		}

		function gameInit() {
			Android.gameInit();
		}

		function claimReward(score, rewards) {
			Android.claimReward(score, rewards)
		}