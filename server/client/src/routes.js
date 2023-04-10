import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import AdminPage from "./pages/adminModule/AdminPage";
import DepartHeadPage from "./pages/DepartHeadPage";
import ScientificEmployerPage from "./pages/ScientificEmployerPage";
import TeachPage from "./pages/TeachPage";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/authModule/AuthPage/AuthPage";
import RegPage from "./pages/authModule/RegPage/RegPage";
import ActivatePage from "./pages/ActivatePage";
import UserAccountPage from "./pages/UserAccountPage/UserAccountPage";

export const useRoutes = role => {
    switch (role) {
        case 'ADMIN':
            return (
                <Routes>
                    <Route path={'/admin'} element={<AdminPage/>} exact/>
                    <Route path={'/department-head'} element={<DepartHeadPage/>} exact/>
                    <Route path={'/scientific-employer'} element={<ScientificEmployerPage/>} exact/>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case 'DEPARTMENT_HEAD':
            return (
                <Routes>
                    <Route path={'/department-head'} element={<DepartHeadPage/>} exact/>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case 'SCIENTIFIC_EMPLOYER':
            return (
                <Routes>
                    <Route path={'/scientific-employer'} element={<ScientificEmployerPage/>} exact/>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case 'TEACHER':
            return (
                <Routes>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        default:
            return (
                <Routes>
                    <Route path={'/reg'} element={<RegPage/>} exact/>
                    <Route path={'/auth'} element={<AuthPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'*'} element={<Navigate to='/auth' replace/>}/>
                </Routes>
            )
    }
}