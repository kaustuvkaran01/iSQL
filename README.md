# SQL Editor as a part of Atlan Assignment

You can check out the application at : **https://isql.netlify.app/**

The application fulfils the requirements that were mentioned by team Atlan.

You can run different queries, filter table data based on search, clear editor, format queries, etc.

**Task :** Create a SQL editor view where your users can query easily on a table using SQL, and see the results.

## Data

The data has been taken from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv)
The data has been modified by me to be used as example.

## List of all major libraries utilised in the application:

I tried to use as few libraries as possible to make the application load faster and avoid chaos.

1. ReactJS:
2. MaterialUI: For icons and a modal
3. Styled Components - For CSS & DarkMode/LightMode
4. TailwindCSS - Built on Tailwind and then migrated to styled components 
## Highlights

1. Optimizing Loading Time

   - I used browser's lighthouse tool to find out the load time and then cross-checked it using analytic tools like GTmatrix and Web.Dev. The final **Time To Interactive** is just 1.2s with the **First Contentful Paint** being 0.8s.
   - With React's Virtual DOM, rendering components is fast & thus the **LCP Score** for the dashboard is just 1.0s.
   - **Caching with Service worker** improved performance on subsequent loads.
   - CLS(Cumulative Layout Shift) is 0.
   - Use of React.lazy() improved the performance greatly by lazy loading the Editor component which was decreasing site performance greatly.

![Screenshot 2021-09-20 184501](https://user-images.githubusercontent.com/43791878/134008831-6121b47a-d293-4d24-9b63-96c357088320.png)

2. Responsive

   - I have used media queries wherever possible so as to make the application look responive across desktops, tablets & mobile phones

3. Feature Set
   - The option to upload a new dataset (mock only)
   - The editor has a search on recently run query.
   - List of all columns in the table for all tables.
   - Visually appealing Light and Dark modes.

## Screenshots

![image](https://user-images.githubusercontent.com/43791878/134009191-4c829d5e-cb04-4e71-a563-36a015246604.png)
![image](https://user-images.githubusercontent.com/43791878/134009237-59650b26-ec7e-4b61-9042-93a75058bc69.png)
![image](https://user-images.githubusercontent.com/43791878/134009407-704e94fb-2be0-45bf-9d85-a2c5e8653a86.png)
