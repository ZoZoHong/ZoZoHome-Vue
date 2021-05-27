// 设备模块

export default {
    state: () => ({
        equipments: [
            {
                id: 1,
                name: "卧室的台灯",
                from: "卧室",
                statu: "On",
                value: "0",
                topic: "ZoZo/LedControlTopicOut",
                isDisplay: true,
                isDetailDisplay: false,
            },
            {
                id: 2,
                name: "台灯",
                from: "撤硕",
                isDisplay: true,
                isDetailDisplay: false,
                statu: "On",
                value: "0",
            },
            {
                id: 3,
                name: "空调",
                from: "卧室",
                isDisplay: true,
                isDetailDisplay: false,
                statu: "On",
                value: "0",
            },
            {
                id: 4,
                name: "夜灯",
                from: "床",
                isDisplay: true,
                isDetailDisplay: false,
                statu: "On",
                value: "0",
            },
            {
                id: 5,
                name: "小爱音箱",
                from: "卧室",
                isDisplay: true,
                isDetailDisplay: false,
                statu: "On",
                value: "0",
            },
            {
                id: 6,
                name: "扫地机",
                from: "卧室",
                statu: "On",
                value: "0",
                topic: "ZoZo/LedControlTopicOut",
                isDisplay: true,
                isDetailDisplay: false,
            },
        ],
    }),
    mutations: {},
    actions: {},
    getters: {}
}

