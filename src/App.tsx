import { Routes, Route } from 'react-router-dom'
import BlogLayout from './components/BlogLayout'
import BlogIndexPage from './components/BlogIndexPage' 
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import BlogPostLayout from './components/BlogPostLayout'
import WelcomePost from './posts/welcome.mdx'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<BlogIndexPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route 
            path="posts/welcome" 
            element={
              <BlogPostLayout 
                title="Welcome to the Modern Blog"
                date="2025-01-09"
                tags={["react", "vite", "mdx"]}
                readingTime="3 min read"
              >
                <WelcomePost />
              </BlogPostLayout>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App