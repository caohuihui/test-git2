angular.module("myApp")
		.controller("test",["$scope",function($scope){
			 $scope.animals = [
		      {
		        id: '00001',
		        name: '猫',
		        sex: '雌',
		        food: '鱼',
		        favor: '玩球'
		      },
		      {
		        id: '00002',
		        name: '狗',
		        sex: '雄',
		        food: '骨头',
		        favor: '接盘子'
		      },
		      {
		        id: '00003',
		        name: '兔',
		        sex: '雌',
		        food: '胡萝卜',
		        favor: '刨洞'
		      },
		      {
		        id: '00004',
		        name: '狮',
		        sex: '雄',
		        food: '肉',
		        favor: '猎物'
		      }
		    ];
			$scope.people=[
				{
					id:0,
					name:"乔乐",
					interest:[
						"爬山",
						"旅游",
						"美食"
					]
				},
				{
					id:1,
					name:"Chris",
					interest:[
						"阅读",
						"音乐"

					]
				},
				{
					id:2,
					name:"韩寒",
					interest:[
						"游戏",
						"电影"
					]
				},
				{
					id:3,
					name:"郭敬明",
					interest:[
						"梦里花落知多少",
						"小时代"
					]
				}
			];

			$scope.arr=['BEIBEI','JINGJING','HUANHUAN','YINGYING','NINI']
		}])