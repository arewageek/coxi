const express = require('express')
const router = express.Router()

const chains = [
    {
        name: 'BNB',
        id: 2,
        chainid: ''
    },
    {
        name: 'Ethereum',
        id: 1,
        chainid: '0x00'
    },
    {
        name: 'Polygon',
        id: 1,
        chainid: '',
    },
    {
        name: "Injective",
        id: 2,
        chainid: ''
    },
    {
        name: "Solana",
        id: 3,
        chainid: ''
    }
]


router.get('/', (req, res) => {
    const { chatid } = req
    res.send({
        request: {
            id: Math.floor(Math.random() * 99999999999),
            time: Date.now(),
            chatId: chatid
        },
        chains: {
            count: chains.length,
            data: chains
        }
    })
})

router.get('/add', (req, res) => {
    const {chaindata} = req

    const status = {
        code: 200,
        msg: "Chain successfully added"
    }

    res.send({
        status: status.code,
        message: status.msg
    })
})

router.get('/remove', (req, res) => {
    // delete a specific chain id by id
})

module.exports = router;