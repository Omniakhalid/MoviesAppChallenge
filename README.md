# Movies App

The main objective of this applicaion is to allow users to know top movies, now playing, popular and upcoming movies and make favorite list for lovely movies with the help of the TMDB API that provides details about movies. It was designed and constructed using React Native.


## Table of Contents

* 1- What Are The Required Packages and How to Install Them
* 2- What Are the Main Components In The App
* 3- How To Run The App

  ##  1- What are The Used Packages

    * the required packages for Drawer:
      ```
      npm install @react-navigation/native
      npm install @react-navigation/drawer
      ```
      Installing dependencies into a bare React Native project
      ```
      npm install react-native-screens react-native-safe-area-context
      npm install react-native-reanimated
      npm install react-native-gesture-handle
      ```
    * <p>ReactQuery for API calls and state management.</p>
      Hooks for fetching, caching and updating asynchronous data in React
      
      I can't install
      <a href='https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/'>React Query from here</a>, So I used It From npm
      ```
      npm install react-query
      ```
    * for store data in the LocalStorage: 
      ```
      npm install @react-native-async-storage/async-storage
      ```
      <p>It Is An asynchronous, unencrypted, persistent, key-value storage system for React Native.</p>
      
  ##  2- What Are the Main Components In The App
    
    * the AppComponents Contains 1 Component <br/>
      1- NavigationContainer to link the top-level navigator to the app environment -> <br/>
         and it contains The QueryClientProvider component to connect and provide a QueryClient that can be used to interact with the cache and it is wrapping
         MAIN that has 2 components (HomeScreen and FavoriteScreen).

         
    * the HomeScreen Contains 3 Components <br/>
                1- SearchBar <br/>
                2- FilterOptions "PopUp Menu" <br/>
                3- FlatList with MovieItem Data <br/>
      
      
    * the FavoriteScreen Contains 1 Component <br/>
               1- FlatList with FavoriteItem Data if we have a FavoriteList else EmptyList Component <br/>
               
  ##  2- How To Run The App
  
      
        npm install 
      
    * Run on Android
      
        ```
        npx react-native run-android
        ```
    * Run on IOS
      
        ```
        npx react-native run-ios
        ```
Congratulations, the appliction should be running perfectly

<p float="left">


<img src="https://user-images.githubusercontent.com/63504895/178773514-f39a6e8a-5a8c-4264-a5b8-e5f33f183f3f.jpg" width="200" height="400" />
<img src="https://user-images.githubusercontent.com/63504895/178772983-4ad0c289-86ea-4d5b-9d96-17032f3012ed.jpg" width="200" height="400" />

<img src="https://user-images.githubusercontent.com/63504895/178772868-a77ce8d1-a0cc-4b39-90cc-2c56bae16da5.jpg" width="200" height="400" />
<img src="https://user-images.githubusercontent.com/63504895/178772627-9b8cca18-8b2f-4d15-8c3c-41844af87b89.jpg" width="200" height="400" />

</p>
