add this on index.html inside <script> tag:

		var item;

		function resume() { 
			$(document).ready(function () {
				c2_callFunction("resume"); 
			});
		}

		function initData(reward) { 
			item = JSON.parse(reward);
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

		function claimReward(score, bonus) {
			item[0]["amount"] = score;

			if(item.length > 1)
			item[1]["amount"] = bonus;

			Android.claimReward(score, JSON.stringify(item))
		}