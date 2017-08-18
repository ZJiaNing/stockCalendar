// 配置文件

export const INDEX_FILTER = {
  datepicker: true,
  searchinput: false,
  stocktype: [{
    name: '自选股',
    type: '0'
  }, {
    name: 'A股',
    type: '1'
  }, {
    name: 'B股',
    type: '2'
  }, {
    name: 'H股',
    type: '3'
  }, {
    name: '提醒',
    type: '4'
  }]
}

export const ANNOUNCEMENT_FILTER = {
  // colsetting: 2,
  datepicker: false,
  searchinput: true,
  stocktype: [{
    name: '自选股',
    type: '0'
  }, {
    name: 'A股',
    type: '1'
  }, {
    name: 'B股',
    type: '2'
  }, {
    name: 'H股',
    type: '3'
  }, {
    name: '公告',
    type: '4'
  }]
}
