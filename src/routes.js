import authenticationRoute from './routes/authentication'

export default function buildRoutes(route) {
    // Authentication Routes
    route.use('/api/auth', authenticationRoute())

    // Error 404 Handler
    route.use((req, res) => {
        if (req.headers.accept.includes('html')) {
            return res.status(404).send(`
        <div>
          <span>Page not found.</span>
        </div>
      `)
        } else {
            return res.status(404).json({
                success: false,
                message: 'API not found.'
            })
        }
    })
}
