import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { getDataUser } from "./services";

import AuthContext from "./auth-context";
import CreateFormContext from "./create-form-context";
import DataContext from "./data-context";

import Login from "./pages/login";
import SignUpEmail from "./pages/signUp/signup-email";
import SignUp from "./pages/signUp";
import HeaderBar from "./pages/header-bar";
import Home from "./pages/home";
import Service from "./pages/service";
import NewProject from "./pages/new-project";
import StatusProject from "./pages/status-project";
import Profile from "./pages/header-bar/pages/profile";
import Brands from "./pages/header-bar/pages/brands";
import BrandsForm from "./pages/header-bar/pages/brands/brands-form";
import Attached from "./pages/header-bar/pages/attached";
import Team from "./pages/header-bar/pages/team";
import Configuration from "./pages/header-bar/pages/configuration";
import HelpSupport from "./pages/header-bar/pages/help-support";
import RecoverPassword from "./pages/recover-password";
import RecoverPasswordEmail from "./pages/recover-password/send-email";
import Onboarding from "./pages/onboarding";
import Reviews from "./pages/reviews";
import MoreInfo from "./pages/more-info";
import ProjectDetail from "./pages/project-detail";

import Projects from "./pages/projects";

import Create from "./pages/new-project/create";

import "./app.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({});

  function toggleAuthenticated() {
    setIsAuthenticated((isAuthenticated) => !isAuthenticated);
  }
  const [notifications, setNotifications] = useState(null);
  const [userData, setUserData] = useState(null);
  const [brands, setBrands] = useState(null);
  const [team, setTeam] = useState(null);
  const [attached, setAttached] = useState(null);
  const [allProjects, setAllProjects] = useState(null);
  const [loadingAllProjects, setLoadingAllProjects] = useState(false);
  const [onboarding, setOnboarding] = useState(undefined);
  const [tourActive, setTourActive] = useState(false);

  const user_id = JSON.parse(
    sessionStorage?.getItem("atomiclab-user")
  )?.user_id;

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem("atomiclab-user") ? true : false);

    user_id &&
      getDataUser(user_id).then(({ data }) => {
        setUserData(data.user[0]);
        setTourActive(data.user[0].tour === 1 ? true : false);
        setOnboarding(data.user[0].onboarding === 1 ? true : false);
      });
  }, [user_id]);

  return (
    <div className="app">
      <DataContext.Provider
        value={{
          notifications,
          setNotifications,
          userData,
          setUserData,
          brands,
          setBrands,
          team,
          setTeam,
          attached,
          setAttached,
          allProjects,
          setAllProjects,
          onboarding,
          setOnboarding,
          tourActive,
          setTourActive,
          loadingAllProjects,
          setLoadingAllProjects,
        }}
      >
        <HashRouter>
          {isAuthenticated && !onboarding && (
            <HeaderBar setIsAuthenticated={setIsAuthenticated} />
          )}

          <Routes>
            {isAuthenticated && onboarding && (
              <Route path="/" element={<Onboarding />} />
            )}

            {isAuthenticated && !onboarding ? (
              <>
                <Route path="/" element={<Home />} />

                <Route path="new-project" element={<NewProject />} />
                <Route path="status-project/:id" element={<StatusProject />} />

                <Route
                  path="service/create"
                  element={
                    <CreateFormContext.Provider value={[formData, setFormData]}>
                      <Create />
                    </CreateFormContext.Provider>
                  }
                />

                <Route
                  path="service/:name"
                  element={
                    <CreateFormContext.Provider value={[formData, setFormData]}>
                      <Service />
                    </CreateFormContext.Provider>
                  }
                />

                <Route path="profile" element={<Profile />} />
                <Route path="brands" element={<Brands />} />
                <Route path="brands/brands-form/:id" element={<BrandsForm />} />
                <Route path="brands/brands-form" element={<BrandsForm />} />
                <Route path="attached" element={<Attached />} />
                <Route path="team" element={<Team />} />
                <Route path="configuration" element={<Configuration />} />
                <Route path="help-support" element={<HelpSupport />} />
                {/* <Route path="onboarding" element={<Onboarding />} /> */}
                <Route path="reviews/:id" element={<Reviews />} />
                <Route path="more-info/:id" element={<MoreInfo />} />
                <Route path="project-detail/:id" element={<ProjectDetail />} />
                <Route path="projects-active" element={<Projects />} />
                <Route path="projects-inactive" element={<Projects />} />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <AuthContext.Provider
                      value={{ isAuthenticated, toggleAuthenticated }}
                    >
                      <Login />
                    </AuthContext.Provider>
                  }
                />

                <Route path="/sing-up/email" element={<SignUpEmail />} />
                <Route path="/sing-up" element={<SignUp />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
                <Route
                  path="/recover-password/email"
                  element={<RecoverPasswordEmail />}
                />
              </>
            )}
          </Routes>
        </HashRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
