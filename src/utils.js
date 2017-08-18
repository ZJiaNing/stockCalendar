// 工具函数存放一些公共函数
import axios from 'axios'
import Mock from 'mockjs'
import { Loading } from 'element-ui'

// 处理GET请求——通用的方法来处理"ajax"请求
// 这边使用axios进行处理——除了这个呢？？？ 是不是也可以同样使用request也处理呢？
// 你需要尝试一下不同的方法
// 从一定程度上还是很有必要进行这样的处理的
// 这样的好处之一就是方便状态的统一管理
export const requestGet = (url, option, callback) => {
  // 创建Loading效果
  // 以服务的方式调用的全屏 Loading 是单例的
  let loading  = Loading.service({ lock: true });
}


// 返回一个Promise对象，使用GET请求，当然也可以使用POST的方式
export const fetch = (url, params) => {
  return new Promise((resolve, reject) => {

    // 以服务的方式调用的全屏 Loading 是单例的
    let loading  = Loading.service({ lock: true });

    axios.get(url, params).then(response => {
      resolve(response.data);

      // 延迟一秒关闭loading效果
      setTimeout(() => {
        loading.close();
      }, 1000);

    }, err => {
      reject(err);
      // 出错也是同样需要关闭loading的
    })
    .catch(error => {
      reject(error);
      // 出错也是同样需要关闭loading的
    })
  })
}

// Mock模拟是数据
Mock.mock('http://g.cn', {
  'data|0-10': [{
    'id|+1': 1,
    'thscode': Mock.mock('@id'),
    'zqjc': Mock.Random.csentence(5)
  }]
});

/**
* 每日特别提醒
*/
export const fetchIndexData = (params) => {
  // console.log("fetch the index page data: " + JSON.stringify(params));
  return fetch('http://g.cn', params);
}

/**
* 公告信息
*/
export const fetchAnnouncementData = (params) => {
  // console.log('fetch announcement page data: ' + JSON.stringify(params));
  return fetch('http://g.cn', params);
}
