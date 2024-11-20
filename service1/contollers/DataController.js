const axios = require('axios');

const SERVICE_2_URL = process.env.SERVICE_2_URL || 'http://localhost:3001/api/info';

const fetchDataFromServiceB = async (req, res) => {
    try {
        const response = await axios.get(SERVICE_2_URL);
        res.json({
            message: 'Data from service 1 with data from service 2',
            datafromserviceB: response.data,
        })
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from service B' });
    }
}

module.exports = { fetchDataFromServiceB };