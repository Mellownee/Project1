
app.use(express.json());
app.use(setUser);
app.use('/projects', requestRouter);

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard Page');
})

app.get('/supervisor', (req, res) => {
    res.send('Supervisor Page');
})

app.get('/manager', (req, res) => {
    res.send('Manager Page');
})

app.get('/admin', (req, res) => {
    res.send('Admin Page');
})




function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
        req.user = users.find(user => user.id === userId);
    }
    next();
}

app.listen(3000);