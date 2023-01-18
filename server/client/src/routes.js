import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import DepartHeadPage from "./pages/DepartHeadPage";
import ScientificEmployerPage from "./pages/ScientificEmployerPage";
import TeachPage from "./pages/TeachPage";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import RegPage from "./pages/RegPage";

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
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case 'DEPARTMENT_HEAD':
            return (
                <Routes>
                    <Route path={'/department-head'} element={<DepartHeadPage/>} exact/>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case 'SCIENTIFIC_EMPLOYER':
            return (
                <Routes>
                    <Route path={'/scientific-employer'} element={<ScientificEmployerPage/>} exact/>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case 'TEACHER':
            return (
                <Routes>
                    <Route path={'/teacher'} element={<TeachPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        default:
            return (
                <Routes>
                    <Route path={'/reg'} element={<RegPage/>} exact/>
                    <Route path={'/auth'} element={<AuthPage/>} exact/>
                    <Route path={'*'} element={<Navigate to='/auth' replace/>}/>
                </Routes>
            )
    }
}