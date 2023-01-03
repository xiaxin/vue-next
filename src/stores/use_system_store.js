export const useSystemStore = definePiniaStore('system', {
    // state
    state: () => ({
        // 访问TOKEN
        enable: true,
        menus: [],
        componentMenus: [
            { heading: 'Test Component' },

            {
                icon: 'mdi-apps',
                name: '仪表盘',
                to: '/test/dashboard',
            },
            {
                icon: 'mdi-apps',
                name: '表单 Form',
                to: '/test/form',
            },
            {
                icon: 'mdi-apps',
                name: '表格 Table',
                to: '/test/table',
            },
            {
                icon: 'mdi-apps',
                name: '卡片 Card',
                to: '/test/card',
            },
            {
                icon: 'mdi-apps',
                name: '工作表 Sheet',
                to: '/test/sheet',
            },
            {
                icon: 'mdi-apps',
                name: '选项卡 Tabs',
                to: '/test/tabs',
            },
            {
                icon: 'mdi-apps',
                name: '图片 Images',
                to: '/test/images',
            },

            {
                icon: 'mdi-apps',
                name: '列表 List',
                to: '/test/list',
            },

            {
                icon: 'mdi-apps',
                name: '图表用例 Echarts',

                children: [
                    {
                        name: '折线图 Line',
                        url: '/test/echarts/line',
                    },
                    {
                        name: '饼图 Pie',
                        url: '/test/echarts/pie',
                    },
                    {
                        name: '散点图 Scatter',
                        url: '/test/echarts/scatter',
                    },
                    {
                        name: 'K 线 Candlestick',
                        url: '/test/echarts/candlestick',
                    },
                    {
                        name: '关系图 Graph',
                        url: '/test/echarts/graph',
                    },
                    {
                        name: '旭日图 Sunburst',
                        url: '/test/echarts/sunburst',
                    },
                    {
                        name: '漏斗图 Funnel',
                        url: '/test/echarts/funnel',
                    },
                    {
                        name: '仪表盘 Gauge',
                        url: '/test/echarts/gauge',
                    },
                ],
            },
            // {
            //     icon: 'mdi-apps',
            //     name: '测试详情页',
            //     to: '/test/detail',
            // },
            {
                icon: 'mdi-apps',
                name: '多级菜单',

                children: [
                    {
                        name: '二级菜单 A',
                        url: '/test/menu/level2',
                    },
                    {
                        icon: 'mdi-apps',
                        name: '二级菜单 B',

                        children: [
                            {
                                name: '三级菜单',
                                url: '/test/menu/level3',
                            },
                        ],
                    },
                ],
            },

            { divider: true },

            {
                icon: 'mdi-apps',
                name: '请求',
                to: '/test/request',
            },
            {
                icon: 'mdi-apps',
                name: '权限',
                to: '/test/permission',
            },
        ],
        systemMenus: [
            {
                icon: 'mdi-apps',
                name: '我的工作台',
                to: '/',
            },
        ],

        permissions: {},
    }),
    actions: {
        setMenus(system) {
            console.log('[set-menus', system)
            if (system == 'component') {
                this.menus = this.componentMenus
            } else if (system == 'system') {
                this.menus = this.systemMenus
            } else {
                this.menus = []
            }
        },
        fetchPermissions() {
            this.permissions = {
                a: {
                    val: 'a',
                    key: 'a',
                },
                b: {
                    val: 'b',
                    key: 'b',
                },
            }
        },
        hasKey(key) {
            return this.permissions[key] != null
        },

        auth(key) {
            if (!this.enable) {
                return true
            }

            const val = this.hasKey(key)
            return val
        },

        openPermission() {
            this.enable = true
        },
        closePermission() {
            this.enable = false
        },
    },
})
