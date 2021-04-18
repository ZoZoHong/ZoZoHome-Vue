


// vue
var app = new Vue({
    el: "#app",
    data: {
        isActive: true,
        currentTab: "常用",
        currentIndex: 0,
        curtapbar: "miHome",
        tapbars: [
            "miHome",
            "smartSet",
            "user"
        ],
        tabs: [
            "常用",
            "卧室",
        ],
        equipments: [
            {
                id: 1,
                name: "台灯",
                from: "卧室",
                statu: "On",
                value: "0",
                topic: "ZoZo/LedControlTopicOut",
                isDisplay: true,
                isDetailDisplay: false,
                statu: "On",
                value: "0",
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
                statu: "On",
                value: "0",
            },
        ],
        smarts: [
            {
                id: 1,
                function: "我出门了",
                img: "url",
            },
            {
                id: 2,
                function: "我出门了",
                img: "url",
            },
            {
                id: 3,
                function: "我出门了",
                img: "url",
            },
        ],
        isDisplay: true,
        // 以下是临时设置，要删的
    },
    created() {

    },
    computed: {
        currentEqmId: function () {
            return this.currentIndex + 1;
        }
    },
    methods: {
        showDetail(index) {
            console.log(this.equipments[index].name + 'from' + this.equipments[index].from);
            // 修改该设备里面的值
            this.equipments[index].isDetailDisplay = true;
            this.currentIndex = index;
        },
        quitDetail() {
            this.equipments[this.currentIndex].isDetailDisplay = false;
        },
        smartControl(index) {
            console.log(this.smarts[index].function);
            console.log(typeof (this.equipments));
        },
        showSmartFunction() {
            this.isDisplay = !this.isDisplay;
        },
        switchEquip(tab) {
            this.currentTab = tab;
            // 修改eqm的isDisplay
            for (let i of this.equipments) {
                if (tab === "常用") {
                    i.isDisplay = true;
                } else if (i.from !== tab) {
                    i.isDisplay = false;
                } else {
                    i.isDisplay = true;
                }
            }
        },
        SwitchStatu() {
            if (this.equipments[this.currentIndex].statu === "On") {
                this.equipments[this.currentIndex].statu = "Off";
            } else {
                this.equipments[this.currentIndex].statu = "On";
            }
        },
        switchTabbar(index) {
            console.log(index);
            this.curtapbar = this.tapbars[index];
        }
    },

});

