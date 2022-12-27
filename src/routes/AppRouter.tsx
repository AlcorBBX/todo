import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      <Route path='*' element={<Navigate to='/404/not-found' />} />
    </Routes>
  )
}