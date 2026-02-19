import Wallpaper from "../../models/Wallpaper"

export default defineEventHandler(async (event) => {

    // // You can access query parameters, headers, etc. from the 'event' object
    // const name = getQuery(event).name || 'World'; // Example: get query parameter 'name'
    // return {
    //   message: `Hello, ${name}! This is a GET request.`,
    // };
    
    // const body = await readBody(event)

    // const Cat = mongoose.model('Cat', { name: String });
    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));

    // Установливаем кодировку utf-8, ответ в JSON
    event.node.res.setHeader('Content-Type', 'application/json; charset=utf-8');

    try {
        const newWallpapers = await Wallpaper.create([
            {
                name: 'Tripname 1',
                email: 'user1@mail.com',
                age: 20,
            },{
                name: 'Tripname 2',
                email: 'user2@mail.com',
                age: 30,
            },{
                name: 'Tripname 3',
                email: 'user3@mail.com',
                age: 40,
            },
        ]);
        console.log('Пользователь успешно создан:', newWallpapers)
        // return 'Пользователь успешно создан:' + newTrip
    } catch (error) {
        console.error('Ошибка при создании пользователя:', error)
        // return 'Ошибка при создании пользователя:' + error
    }

    // вывод всех документов
    return await Wallpaper.find()
})

// http://127.0.0.1:3000/api/wallpapers/initdata