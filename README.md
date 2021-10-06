# waites-frontend-test-task Bairov Anatolii
Данные о пользователях бота берутся из файла users.json (./src/components/data/users.json) в формате:
	
	{
		
		"id":string,

		"name": string,
	
		"phone": string,

		"email": string,

		"avatarUrl": string,

		"birthday": string,
	
		"sex": integer
	}

реализована фильтрации пользователей при вводе в поле: "Find user by username"
![image](https://user-images.githubusercontent.com/78851575/136235462-02b493de-14a7-41a5-9a56-1dad72a7387a.png)

добавлена пагинация(12 пользователей на страницу).
