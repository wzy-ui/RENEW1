var data = {
      //云开发环境id
      env: 'xin-dev2023-3gke13qm4291def7',
      //分享配置
      share_title: 'RENEW',
      share_img: '/images/poster.jpg', //可以是网络地址，本地文件路径要填绝对位置
      share_poster:'https://s2.ax1x.com/2019/11/20/Mhpqmt.png',//必须为网络地址
      //客服联系方式
      kefu: {
            qq: '859162716',
            weixin:'ttao527'
      },
      //默认启动页背景图，防止请求失败完全空白 
      //可以是网络地址，本地文件路径要填绝对位置
      bgurl: '',
      //校区
      campus: [{
                  name: '西丽湖',
                  id: 0
            },
            {
                  name: '留仙洞',
                  id: 1
            },
            {
                  name: '官龙山',
                  id: 2
            },
      ],
      //配置学院，建议不要添加太多，不然前端不好看
      college: [{
                  name: '通用',
                  id: -1
            },
            {
                  name: '学习',
                  id: 0
            },
            {
                  name: '日用',
                  id: 1
            },
            {
                  name: '装饰',
                  id: 2
            },
            {
                  name: '衣物',
                  id: 3
            },
            {
                  name: '运动',
                  id: 4
            },
            {
                  name: '美妆',
                  id: 5
            },
            {
                  name: '其他',
                  id: 6
            },
      ],
}
//下面的就别动了
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}