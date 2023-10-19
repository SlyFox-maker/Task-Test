jQuery(document).ready(function($) {
	$("#save").click(function(event) {
		var city=$("#city option:selected").text();
		var factory=$("#factory option:selected").text();
		var worker=$("#worker option:selected").text();
		var team = $("#team option:selected").text();

		alert("Город: " + city+"\nЦех: "+factory+"\nСотрудник: "+worker+"\nБригада: "+team);
	});

	//Меняем содержимое других выпадающих списков в соотвествии что выбрал пользователь
	$("#city").change(function(event) {
		var city = $("#city").val();

		if(city!="Не выбрано"){
			//заполняем после с цехами
			var arrFact=getFactories();
			$("#factory").empty();
			$("#factory").append("<option value='Не выбрано'>Не выбрано</option>")

			for(var i=0;i<=arrFact[city].length;i++){
				var factory = arrFact[city][i];

				if(factory!=undefined){
					$("#factory").append("<option value="+factory+">"+factory+"</option>")
				}
			}


			//заполняем поле с работниками
			var arrWork=getWorkers();
			$("#worker").empty();
			$("#worker").append("<option value='Не выбрано'>Не выбрано</option>")

			for(var i=0;i<=arrWork[city].length;i++){
				var worker = arrWork[city][i];

				if(worker!=undefined){
					$("#worker").append("<option value="+worker+">"+worker+"</option>")
				}
			}
		}
	});

	//Заполняем начальные поля(Город)
	var arrCity = getCity();
	for(var i =0;i<=arrCity.length;i++){
		var val = arrCity[i];
		if(val!=undefined){
			$("#city").append("<option value="+val+">"+val+"</option>")
		}
	}

	//функция которая будет возвращать города для формы
	function getCity(){
		//создаем массив городов
		var cityArray = ["Москва","Санкт-Петербург","Омск", "Новосибирск"];

		return cityArray;
	}

	//Функция которая будет вложенные объекты
	function getFactories(){
		var factories={
			"Москва": 			["Цех #2","Цех #21","Цех #65","Цех #3"],
			"Санкт-Петербург": 	["Цех #32","Цех #2","Цех #1"],
			"Омск": 			["Цех #212","Цех #64","Цех #32"],
			"Новосибирск": 		["Цех #23","Цех #78","Цех #26"]
		};
		return factories;
	}

	function getWorkers(){
		var workers={
			"Москва": 			["Андрей","Алексей","Владимир","Генадий"],
			"Санкт-Петербург": 	["Григорий","Андрей","Максим"],
			"Омск": 			["Сергей","Владимир","Максим"],
			"Новосибирск": 		["Андрей","Денис","Иван"]
		};
		return workers;
	}

});