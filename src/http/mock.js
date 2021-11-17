import Mock from 'mockjs'

const Random = Mock.Random

var listData = function() {
    let _data = {
        status: 200,
        message: 'success',
        data: {
            total: 100,
            'rows|10': [{
            id: '@guid',
            name: '@cname',
            'age|20-30': 23,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
            }]
        }
    }
    return { _data }
}
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('http://route.showapi.com/60-27', 'post', listData())
