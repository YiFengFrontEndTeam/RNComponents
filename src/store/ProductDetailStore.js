/**
 * Created by yf on 2017/7/25.
 */

import {observable, action, computed} from 'mobx'
import BaseStore from './baseStore'

const NAMES = ['哇哈哈','笑嘻嘻','白日依山尽','黄河入海流','孤帆远影碧空尽','我亚索贼666'];
const TITILE_CONTENTS = ['我就站在阳光下等着你，等你从黑暗里走出来与我对峙！我从不缺少面对黑暗的勇气！从前是，现在是！将来亦然！',
    '【如果你记得今天，请转！[泪]】那一年的今天，1937年7月7日，日本侵略者制造了震惊中外的“七七”卢沟桥事变！全民族抗战爆发！中华儿女用生命和鲜血谱写了一首反抗侵略的壮丽史诗！今日，一起发条微博，祭奠同胞！勿忘历史！转！',
    '【家常版大盘鸡】鸡中最爱，一顿只吃这一盘足矣。等鸡吃得差不多了，往汤汁里下点面，几乎满足了我对食物的所有幻想[二哈] #一日一食一记# '
    ,'习近平指出，中新传统友好，合作成果丰硕，走出了一条与时俱进、互学互鉴的合作道路。中方高度重视发展同新加坡友好关系，愿同新方一道，推动两国与时俱进的全方位合作伙伴关系不断取得新进展。',
    '习近平强调，中新双方要继承两国老一辈领导人留下的良好传统，从战略高度和长远角度把握好两国关系发展方向，继续在涉及彼此核心利益和重大关切问题上相互理解和支持。要创新合作思路，深挖合作潜力，落实好共同推进“一带一路”建设谅解备忘录，深化基础设施互联互通、',
    '经贸投资、金融合作。要建设好政府间重大合作项目，拓展互联网、信息通信技术等新兴领域合作。要开展好两国青少年和大学生交流项目，扩大人员往来，夯实两国友好民意基础。要加强在联合国、亚太经合组织、二十国集团等多边框架内的协调和配合，为完善全球治理作出贡献。',
    '李显龙表示，新中关系过去一年取得新进展。在当前复杂多变的国际形势下，新中深化交流合作十分重要。新加坡将继续支持并积极参与“一带一路”建设，落实好政府间大项目，拓展同中国在金融、高铁、自贸区建设等领域合作。新加坡愿积极促进中国－东盟合作关系。',
    '近日，中国访问学者章莹颖在美失踪案引发国内外广泛关注。此案中，一个涉嫌教唆疑犯本伦特·克里斯滕森进行绑架的变态网站也引起了大家的注意。这个网站充分利用了美国法律的“擦边球”，虽然已卷入多起刑事案件，却一直未受到制裁。紫牛新闻记者近日辗转进入这个网站调查，结果却出人意料…… 紫牛新闻记者 宋世锋'];
const HEADERS = ['http://img1.skqkw.cn:888/2014/12/08/07/rf5rlvjegvz-10335.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1310351024,486686820&fm=117&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2714374374,637560106&fm=117&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1733071988,3600838707&fm=117&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=57183681,2474253451&fm=117&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3625142282,583054845&fm=117&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3414270655,3991336596&fm=117&gp=0.jpg',
    'http://img5.imgtn.bdimg.com/it/u=785610095,2402278722&fm=26&gp=0.jpg'];


export default class ProductDetailStore extends BaseStore{

    constructor(props){
        super(props);
    }

    @observable
    datasources = []

    loadData(){
        console.warn("load data");
        setTimeout(this.testData,2000);
    }


    testData = ()=>{
        this.fetchItemsData(20);
        this.onSuccess()
    }

    @computed get fetchDatas(){
        console.warn("datasource => ",JSON.stringify(this.datasources));
        return this.datasources;
    }

    @action
    fetchItemsData(count:number, start:number=0) {
        this.datasources.splice(0,this.datasources.length);
        for (let i = start; i < count + start ; i ++){
            const nameRandom = Math.round(Math.random() * NAMES.length);
            const textRandom = Math.round(Math.random() * TITILE_CONTENTS.length);
            const ageRandom = Math.round(Math.random() * 26);
            const praiseRandom = Math.round(Math.random() * 100);
            const commentRandom = Math.round(Math.random() * 1000);
            const headRandom = Math.round(Math.random() * HEADERS.length);
            this.datasources.push({
                name:NAMES[nameRandom],
                text:TITILE_CONTENTS[textRandom],
                headIcon:HEADERS[headRandom],
                ouxiang:nameRandom%2?true:false,
                createDate:'1分钟前',
                age:ageRandom,
                praise:praiseRandom,
                comment:commentRandom,
                photos:HEADERS.splice(0,headRandom),
            });
        }
    }

}