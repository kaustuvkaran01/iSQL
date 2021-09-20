# SQL Editor as a part of Atlan Assignment

You can check out the application at : **https://isql.netlify.app/**

The application fulfils the requirements that were mentioned by team Atlan.

You can run different queries, filter table data based on search, clear editor, format queries, etc.

**Task :** Create a SQL editor view where your users can query easily on a table using SQL, and see the results.

## Data

The data has been taken from ![here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv)
The data has been modified by me to be used as example.

## List of all major libraries utilised in the application:

I tried to use as less libraries as possible so as to make application load faster and code the proper way.

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
   - Use of React.lazy improved the performance greatly by lazy loading the Editor component which was decreasing site performance greatly.

![Screen Shot 2021-06-08 at 2 13 27 AM](https://user-images.githubusercontent.com/54510593/121086599-fd4a6b00-c800-11eb-915b-b92f15d72ac4.png)

2. Responsive

   - I have used media queries wherever possible so as to make the application look responive across desktops, tablets & mobile phones

3. Feature Set
   - The option to upload a new dataset (mock only)
   - The editor has a search on recently run query.
   - List of all columns in the table for all tables.
   - Visually appealing Light and Dark modes.

## Screenshots

![screencapture-sql-editor-atlan-netlify-app-2021-06-08-02_22_50](https://user-images.githubusercontent.com/54510593/121086862-54e8d680-c801-11eb-9c15-3861e81b9bba.png)

![screencapture-sql-editor-atlan-netlify-app-editor-2021-06-08-02_23_21](https://user-images.githubusercontent.com/54510593/121086883-5a462100-c801-11eb-9614-726ed65a06a1.png)

![screencapture-sql-editor-atlan-netlify-app-editor-2021-06-08-02_28_42](https://user-images.githubusercontent.com/54510593/121086890-5d411180-c801-11eb-97b3-8376f4681e47.png)

![screencapture-sql-editor-atlan-netlify-app-2021-06-08-02_29_01](https://user-images.githubusercontent.com/54510593/121086911-6500b600-c801-11eb-95ac-46a6844aff54.png)

![screencapture-sql-editor-atlan-netlify-app-editor-2021-06-08-02_24_35](https://user-images.githubusercontent.com/54510593/121086917-692cd380-c801-11eb-9c96-863a143bdf3f.png)
