import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import AllCourses from './Components/AllCourses/AllCourses';
import About from './Components/About/About';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';


function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
       fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {/* Common Header componet */}
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home courses={courses}></Home>
          </Route>
          <Route exact path="/home">
            <Home courses={courses}></Home>
          </Route>
          <Route exact path="/courses">
          <AllCourses courses={courses}></AllCourses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/sign-in">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/courses/:id">
            <CourseDetails courses={courses}></CourseDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* Common Footer component */}
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
