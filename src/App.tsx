import { useState, useEffect } from 'react';
import { Trophy, Sparkles } from 'lucide-react';

interface TikTokUser {
  id: string;
  username: string;
  avatar: string;
  videoUrl: string;
  videoId?: string;
}

const mockUsers: TikTokUser[] = [
  {
    "id": "2",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7545903796275170582",
    "videoId": "7545903796275170582"
  },
  {
    "id": "3",
    "username": "errzzzattt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@errzzzattt/video/7556045515402513676",
    "videoId": "7556045515402513676"
  },
  {
    "id": "4",
    "username": "qwerta017",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@qwerta017/video/7550567451637992710",
    "videoId": "7550567451637992710"
  },
  {
    "id": "5",
    "username": "fromanotherplanet07",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@fromanotherplanet07/video/7555179319044132152",
    "videoId": "7555179319044132152"
  },
  {
    "id": "6",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "7",
    "username": "zhanelek_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhanelek_/video/7556583125480951062",
    "videoId": "7556583125480951062"
  },
  {
    "id": "8",
    "username": "yarikzhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yarikzhan/video/7552965803021290763",
    "videoId": "7552965803021290763"
  },
  {
    "id": "9",
    "username": "nurzh0n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurzh0n/video/7548130811090980102",
    "videoId": "7548130811090980102"
  },
  {
    "id": "10",
    "username": "shalkarovna_8",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@shalkarovna_8/video/7551787223599926539",
    "videoId": "7551787223599926539"
  },
  {
    "id": "11",
    "username": "_._alsu",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@_._alsu/video/7550660639115447558",
    "videoId": "7550660639115447558"
  },
  {
    "id": "12",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7551737886849207559",
    "videoId": "7551737886849207559"
  },
  {
    "id": "13",
    "username": "naz.saparova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@naz.saparova/video/7551104704810421509",
    "videoId": "7551104704810421509"
  },
  {
    "id": "14",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7551339157990231303",
    "videoId": "7551339157990231303"
  },
  {
    "id": "15",
    "username": "aruzhan_qambarbek",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aruzhan_qambarbek/video/7557722546678795576",
    "videoId": "7557722546678795576"
  },
  {
    "id": "16",
    "username": "k.lunnn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@k.lunnn/video/7557737610093874444",
    "videoId": "7557737610093874444"
  },
  {
    "id": "17",
    "username": "zhannsayaa01",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhannsayaa01/video/7557773021222669580",
    "videoId": "7557773021222669580"
  },
  {
    "id": "18",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "19",
    "username": "selini.i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@selini.i/video/7557410601094384952",
    "videoId": "7557410601094384952"
  },
  {
    "id": "20",
    "username": "aruzhan_qambarbek",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aruzhan_qambarbek/video/7557733588481903884",
    "videoId": "7557733588481903884"
  },
  {
    "id": "21",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556715242563063052",
    "videoId": "7556715242563063052"
  },
  {
    "id": "22",
    "username": "errzzzattt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@errzzzattt/video/7556045515402513676",
    "videoId": "7556045515402513676"
  },
  {
    "id": "23",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7557734106814074123",
    "videoId": "7557734106814074123"
  },
  {
    "id": "24",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7556670810530778424",
    "videoId": "7556670810530778424"
  },
  {
    "id": "25",
    "username": "dill_yia",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@dill_yia/video/7555565934098828556",
    "videoId": "7555565934098828556"
  },
  {
    "id": "26",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7558188117547584780",
    "videoId": "7558188117547584780"
  },
  {
    "id": "27",
    "username": "simba_ait1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@simba_ait1/video/7558112217846091030",
    "videoId": "7558112217846091030"
  },
  {
    "id": "28",
    "username": "gulnaz4666",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@gulnaz4666/video/7547337651632819478",
    "videoId": "7547337651632819478"
  },
  {
    "id": "29",
    "username": "8oxhwan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@8oxhwan/video/7557442608373566731",
    "videoId": "7557442608373566731"
  },
  {
    "id": "30",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556715152951790859",
    "videoId": "7556715152951790859"
  },
  {
    "id": "31",
    "username": "a_aiymka",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@a_aiymka/video/7556551583106878731",
    "videoId": "7556551583106878731"
  },
  {
    "id": "32",
    "username": "l1tos_sss",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@l1tos_sss/video/7557866179944140040",
    "videoId": "7557866179944140040"
  },
  {
    "id": "33",
    "username": "k.rusgul.s95",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@k.rusgul.s95/video/7558395955523996939",
    "videoId": "7558395955523996939"
  },
  {
    "id": "34",
    "username": "errzzzattt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@errzzzattt/video/7557174670626278667",
    "videoId": "7557174670626278667"
  },
  {
    "id": "35",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7553388651296738571",
    "videoId": "7553388651296738571"
  },
  {
    "id": "36",
    "username": "appleuser95258644",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@appleuser95258644/video/7548153462291254534",
    "videoId": "7548153462291254534"
  },
  {
    "id": "37",
    "username": "ssqrq",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@ssqrq/video/7551344927213473042",
    "videoId": "7551344927213473042"
  },
  {
    "id": "38",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7552951830863547670",
    "videoId": "7552951830863547670"
  },
  {
    "id": "39",
    "username": "nazeka_a_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nazeka_a_/video/7545518198074903826",
    "videoId": "7545518198074903826"
  },
  {
    "id": "40",
    "username": "rustemovnadana1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@rustemovnadana1/video/7553955271714819331",
    "videoId": "7553955271714819331"
  },
  {
    "id": "41",
    "username": "baizhaanovnaa",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@baizhaanovnaa/video/7550243093652540689",
    "videoId": "7550243093652540689"
  },
  {
    "id": "42",
    "username": "engishteacher97",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@engishteacher97/video/7556459138197376267",
    "videoId": "7556459138197376267"
  },
  {
    "id": "43",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556717758076046648",
    "videoId": "7556717758076046648"
  },
  {
    "id": "44",
    "username": "vmestesrahimova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@vmestesrahimova/video/7557852783932722443",
    "videoId": "7557852783932722443"
  },
  {
    "id": "45",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7549107835519503638",
    "videoId": "7549107835519503638"
  },
  {
    "id": "46",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7557661072438906120",
    "videoId": "7557661072438906120"
  },
  {
    "id": "47",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7556834806131068171",
    "videoId": "7556834806131068171"
  },
  {
    "id": "48",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7556948025915002123",
    "videoId": "7556948025915002123"
  },
  {
    "id": "49",
    "username": "ananayin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@ananayin/video/7556332522276195606",
    "videoId": "7556332522276195606"
  },
  {
    "id": "50",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556321008672673035",
    "videoId": "7556321008672673035"
  },
  {
    "id": "51",
    "username": "aidana__turganova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aidana__turganova/video/7556612750428933388",
    "videoId": "7556612750428933388"
  },
  {
    "id": "52",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556957545663827212",
    "videoId": "7556957545663827212"
  },
  {
    "id": "53",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7554080957570125074",
    "videoId": "7554080957570125074"
  },
  {
    "id": "54",
    "username": "bibinluv.tt ",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7548398282028944662",
    "videoId": "7548398282028944662"
  },
  {
    "id": "55",
    "username": "selini.i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@selini.i/video/7557410601094384952 ",
    "videoId": "7557410601094384952"
  },
  {
    "id": "56",
    "username": "moniiaquen",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@moniiaquen/video/7546901544508280071",
    "videoId": "7546901544508280071"
  },
  {
    "id": "57",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7545903796275170582",
    "videoId": "7545903796275170582"
  },
  {
    "id": "58",
    "username": "yarikzhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yarikzhan/video/7552965803021290763",
    "videoId": "7552965803021290763"
  },
  {
    "id": "59",
    "username": "toq__ash",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@toq__ash/video/7558398786272333068",
    "videoId": "7558398786272333068"
  },
  {
    "id": "60",
    "username": "selini.i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@selini.i/video/7558467878849187084",
    "videoId": "7558467878849187084"
  },
  {
    "id": "61",
    "username": "aruzhan_qambarbek",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aruzhan_qambarbek/video/7557733588481903884",
    "videoId": "7557733588481903884"
  },
  {
    "id": "62",
    "username": "b._.u._.g._.a._.t._.t._i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@b._.u._.g._.a._.t._.t._i/video/7552186106683362616",
    "videoId": "7552186106683362616"
  },
  {
    "id": "63",
    "username": "nurkeyevas1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkeyevas1/video/7549612827229867320",
    "videoId": "7549612827229867320"
  },
  {
    "id": "64",
    "username": "whiteeflamee",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@whiteeflamee/video/7558442290444782904",
    "videoId": "7558442290444782904"
  },
  {
    "id": "65",
    "username": "fromanotherplanet07",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@fromanotherplanet07/video/7555179319044132152",
    "videoId": "7555179319044132152"
  },
  {
    "id": "66",
    "username": "whiteeflamee",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@whiteeflamee/video/7558442972644199736",
    "videoId": "7558442972644199736"
  },
  {
    "id": "67",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "68",
    "username": "qwerta017",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@qwerta017/video/7550567451637992710",
    "videoId": "7550567451637992710"
  },
  {
    "id": "69",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556715152951790859",
    "videoId": "7556715152951790859"
  },
  {
    "id": "70",
    "username": "yos_hii",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yos_hii/video/7558475518941629708",
    "videoId": "7558475518941629708"
  },
  {
    "id": "71",
    "username": "gulnaz4666",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@gulnaz4666/video/7547337651632819478",
    "videoId": "7547337651632819478"
  },
  {
    "id": "72",
    "username": "errzzzattt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@errzzzattt/video/7556045515402513676",
    "videoId": "7556045515402513676"
  },
  {
    "id": "73",
    "username": "nurkeyevas1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkeyevas1/video/7548774643163811078",
    "videoId": "7548774643163811078"
  },
  {
    "id": "74",
    "username": "nurzh0n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurzh0n/video/7548130811090980102",
    "videoId": "7548130811090980102"
  },
  {
    "id": "75",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "76",
    "username": "aidana__turganova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aidana__turganova/video/7558443499851435276",
    "videoId": "7558443499851435276"
  },
  {
    "id": "77",
    "username": "doni.nur2",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@doni.nur2/video/7549558437802298629",
    "videoId": "7549558437802298629"
  },
  {
    "id": "78",
    "username": "nurkozhaeva_m",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkozhaeva_m/video/7555429156285058316",
    "videoId": "7555429156285058316"
  },
  {
    "id": "79",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7556670810530778424",
    "videoId": "7556670810530778424"
  },
  {
    "id": "80",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7549107835519503638",
    "videoId": "7549107835519503638"
  },
  {
    "id": "81",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7551339157990231303",
    "videoId": "7551339157990231303"
  },
  {
    "id": "82",
    "username": "reko.kz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@reko.kz/video/7558402528967183627",
    "videoId": "7558402528967183627"
  },
  {
    "id": "83",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7552920828023803147",
    "videoId": "7552920828023803147"
  },
  {
    "id": "84",
    "username": "bekizada_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bekizada_/video/7551443983663205644",
    "videoId": "7551443983663205644"
  },
  {
    "id": "85",
    "username": "qorapqyz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@qorapqyz/video/7552116430175571256",
    "videoId": "7552116430175571256"
  },
  {
    "id": "86",
    "username": "psychomusefeelvibe",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@psychomusefeelvibe/video/7546992845626838328",
    "videoId": "7546992845626838328"
  },
  {
    "id": "87",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "88",
    "username": "18.o9.o7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@18.o9.o7/video/7547292995201109304",
    "videoId": "7547292995201109304"
  },
  {
    "id": "89",
    "username": "bibinluv.tt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7549125863913049366",
    "videoId": "7549125863913049366"
  },
  {
    "id": "90",
    "username": "nurkeyevas1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkeyevas1/video/7549484990682107141",
    "videoId": "7549484990682107141"
  },
  {
    "id": "91",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7558568446242360594",
    "videoId": "7558568446242360594"
  },
  {
    "id": "92",
    "username": "bagaloj",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bagaloj/video/7551120644671294726",
    "videoId": "7551120644671294726"
  },
  {
    "id": "93",
    "username": "saayam_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@saayam_/video/7550031705432739128",
    "videoId": "7550031705432739128"
  },
  {
    "id": "94",
    "username": "kxkako",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kxkako/video/7547240491167976727",
    "videoId": "7547240491167976727"
  },
  {
    "id": "95",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7553554987876551959",
    "videoId": "7553554987876551959"
  },
  {
    "id": "96",
    "username": "rustemovnadana1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@rustemovnadana1/video/7553955271714819331",
    "videoId": "7553955271714819331"
  },
  {
    "id": "97",
    "username": "bibinluv01",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv01/video/7551379586559528248",
    "videoId": "7551379586559528248"
  },
  {
    "id": "98",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7553388651296738571",
    "videoId": "7553388651296738571"
  },
  {
    "id": "99",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "100",
    "username": "moniiaquen",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@moniiaquen/video/7550242962676960519",
    "videoId": "7550242962676960519"
  },
  {
    "id": "101",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7551060294567480598",
    "videoId": "7551060294567480598"
  },
  {
    "id": "102",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7557456799545232648",
    "videoId": "7557456799545232648"
  },
  {
    "id": "103",
    "username": "janarmasilova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@janarmasilova/video/7558377415509134604",
    "videoId": "7558377415509134604"
  },
  {
    "id": "104",
    "username": "bekizada_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bekizada_/video/7552083323774864652",
    "videoId": "7552083323774864652"
  },
  {
    "id": "105",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556715242563063052",
    "videoId": "7556715242563063052"
  },
  {
    "id": "106",
    "username": "yuu_sangre",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yuu_sangre/video/7558402834006396216",
    "videoId": "7558402834006396216"
  },
  {
    "id": "107",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7548466145485966598",
    "videoId": "7548466145485966598"
  },
  {
    "id": "108",
    "username": "lyerka.style",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lyerka.style/video/7547016076471651592",
    "videoId": "7547016076471651592"
  },
  {
    "id": "109",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556717758076046648",
    "videoId": "7556717758076046648"
  },
  {
    "id": "110",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556320868620717323",
    "videoId": "7556320868620717323"
  },
  {
    "id": "111",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556957545663827212",
    "videoId": "7556957545663827212"
  },
  {
    "id": "112",
    "username": "momvlog4",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@momvlog4/video/7552600090267897106",
    "videoId": "7552600090267897106"
  },
  {
    "id": "113",
    "username": "ananayin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@ananayin/video/7556332522276195606",
    "videoId": "7556332522276195606"
  },
  {
    "id": "114",
    "username": "nzbkvn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nzbkvn/video/7552895650443087160",
    "videoId": "7552895650443087160"
  },
  {
    "id": "115",
    "username": "k.lunnn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@k.lunnn/video/7557737610093874444",
    "videoId": "7557737610093874444"
  },
  {
    "id": "116",
    "username": "appleuser95258644",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@appleuser95258644/video/7548153462291254534",
    "videoId": "7548153462291254534"
  },
  {
    "id": "117",
    "username": "aisozhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aisozhan/video/7555919004854914324",
    "videoId": "7555919004854914324"
  },
  {
    "id": "118",
    "username": "serbolkyzy.a",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@serbolkyzy.a/video/7551022228813565240",
    "videoId": "7551022228813565240"
  },
  {
    "id": "119",
    "username": "yos_hii",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yos_hii/video/7558475518941629708",
    "videoId": "7558475518941629708"
  },
  {
    "id": "120",
    "username": "dill_yia",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@dill_yia/video/7555565934098828556",
    "videoId": "7555565934098828556"
  },
  {
    "id": "121",
    "username": "creative_hands8",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@creative_hands8/video/7558502287417691399",
    "videoId": "7558502287417691399"
  },
  {
    "id": "122",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7558499142415191352",
    "videoId": "7558499142415191352"
  },
  {
    "id": "123",
    "username": "doni.nur2",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@doni.nur2/video/7549558437802298629",
    "videoId": "7549558437802298629"
  },
  {
    "id": "124",
    "username": "nzbkvn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nzbkvn/video/7552895650443087160",
    "videoId": "7552895650443087160"
  },
  {
    "id": "125",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7558467312710470968 ",
    "videoId": "7558467312710470968"
  },
  {
    "id": "126",
    "username": "nurkozhaeva_m",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkozhaeva_m/video/7555429156285058316",
    "videoId": "7555429156285058316"
  },
  {
    "id": "127",
    "username": "botashkakemelbekowa",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@botashkakemelbekowa/video/7558113384852409611",
    "videoId": "7558113384852409611"
  },
  {
    "id": "128",
    "username": "oncozy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@oncozy/video/7558430606158204182",
    "videoId": "7558430606158204182"
  },
  {
    "id": "129",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7558568446242360594",
    "videoId": "7558568446242360594"
  },
  {
    "id": "130",
    "username": "whiteeflamee",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@whiteeflamee/video/7558442972644199736",
    "videoId": "7558442972644199736"
  },
  {
    "id": "131",
    "username": "zhanbotin_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhanbotin_/video/7558409692402240780",
    "videoId": "7558409692402240780"
  },
  {
    "id": "132",
    "username": "alia_abdirova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alia_abdirova/video/7552136532174310667",
    "videoId": "7552136532174310667"
  },
  {
    "id": "133",
    "username": "daxaaa1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@daxaaa1/video/7558394540399414539",
    "videoId": "7558394540399414539"
  },
  {
    "id": "134",
    "username": "kozhakhmetova.tan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kozhakhmetova.tan/video/7556681668669492536",
    "videoId": "7556681668669492536"
  },
  {
    "id": "135",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "136",
    "username": "aqylbek.arys",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aqylbek.arys/video/7558523616162319672",
    "videoId": "7558523616162319672"
  },
  {
    "id": "137",
    "username": "ahmetbayeva",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@ahmetbayeva/video/7558496074726444299",
    "videoId": "7558496074726444299"
  },
  {
    "id": "138",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7557456799545232648",
    "videoId": "7557456799545232648"
  },
  {
    "id": "139",
    "username": "asdynr",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@asdynr/video/7556712126212099340",
    "videoId": "7556712126212099340"
  },
  {
    "id": "140",
    "username": "suluface.kz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@suluface.kz/video/7558463159942614283",
    "videoId": "7558463159942614283"
  },
  {
    "id": "141",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556320868620717323",
    "videoId": "7556320868620717323"
  },
  {
    "id": "142",
    "username": "mmmilky.way",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mmmilky.way/video/7558461125789093132",
    "videoId": "7558461125789093132"
  },
  {
    "id": "143",
    "username": "aidana__turganova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aidana__turganova/video/7558443499851435276",
    "videoId": "7558443499851435276"
  },
  {
    "id": "144",
    "username": "gavhar_02_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@gavhar_02_/video/7558212461384584504",
    "videoId": "7558212461384584504"
  },
  {
    "id": "145",
    "username": "021.bvl",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@furshet_choco/video/7556979034580700427",
    "videoId": "7556979034580700427"
  },
  {
    "id": "146",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "147",
    "username": "elyaym",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@elyaym/video/7558436941612584194",
    "videoId": "7558436941612584194"
  },
  {
    "id": "148",
    "username": "bekizada_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bekizada_/video/7551443983663205644",
    "videoId": "7551443983663205644"
  },
  {
    "id": "149",
    "username": "magic.candle.flame",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@magic.candle.flame/video/7558496229580229944",
    "videoId": "7558496229580229944"
  },
  {
    "id": "150",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7558364234053209356",
    "videoId": "7558364234053209356"
  },
  {
    "id": "151",
    "username": "user70461616978458",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@user70461616978458/video/7558453319123897611",
    "videoId": "7558453319123897611"
  },
  {
    "id": "152",
    "username": "bekizada_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bekizada_/video/7552083323774864652",
    "videoId": "7552083323774864652"
  },
  {
    "id": "153",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7551060294567480598",
    "videoId": "7551060294567480598"
  },
  {
    "id": "154",
    "username": "yeyemur25",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yeyemur25/video/7558404643022196024",
    "videoId": "7558404643022196024"
  },
  {
    "id": "155",
    "username": "yuu_sangre",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yuu_sangre/video/7558402834006396216",
    "videoId": "7558402834006396216"
  },
  {
    "id": "156",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7545872243172134150",
    "videoId": "7545872243172134150"
  },
  {
    "id": "157",
    "username": "selini.i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@selini.i/video/7558467878849187084",
    "videoId": "7558467878849187084"
  },
  {
    "id": "158",
    "username": "psychomusefeelvibe",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@psychomusefeelvibe/video/7546992845626838328",
    "videoId": "7546992845626838328"
  },
  {
    "id": "159",
    "username": "rafaelsax45",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@rafaelsax45/video/7558410653514353927",
    "videoId": "7558410653514353927"
  },
  {
    "id": "160",
    "username": "maria_dreamer",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@maria_dreamer/video/7558532295951420683",
    "videoId": "7558532295951420683"
  },
  {
    "id": "161",
    "username": "eleusinovvaaa",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@eleusinovvaaa/video/7558561823549689144",
    "videoId": "7558561823549689144"
  },
  {
    "id": "162",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7548466145485966598",
    "videoId": "7548466145485966598"
  },
  {
    "id": "163",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "164",
    "username": "bibinluv.tt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7549125863913049366",
    "videoId": "7549125863913049366"
  },
  {
    "id": "165",
    "username": "18.o9.o7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@18.o9.o7/video/7547292995201109304",
    "videoId": "7547292995201109304"
  },
  {
    "id": "166",
    "username": "lune_wechat",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lune_wechat/video/7545963660980653368",
    "videoId": "7545963660980653368"
  },
  {
    "id": "167",
    "username": "snsnotepad",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@snsnotepad/video/7546440511146495234",
    "videoId": "7546440511146495234"
  },
  {
    "id": "168",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7553387396797091084",
    "videoId": "7553387396797091084"
  },
  {
    "id": "169",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7551043669499841800",
    "videoId": "7551043669499841800"
  },
  {
    "id": "170",
    "username": "b._.u._.g._.a._.t._.t._i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@b._.u._.g._.a._.t._.t._i/video/7552186106683362616",
    "videoId": "7552186106683362616"
  },
  {
    "id": "171",
    "username": "serbolkyzy.a",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@serbolkyzy.a/video/7551022228813565240",
    "videoId": "7551022228813565240"
  },
  {
    "id": "172",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7549668994526072071",
    "videoId": "7549668994526072071"
  },
  {
    "id": "173",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7551390082436058390",
    "videoId": "7551390082436058390"
  },
  {
    "id": "174",
    "username": "aika_eboka",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aika_eboka/video/7553313893335010572",
    "videoId": "7553313893335010572"
  },
  {
    "id": "175",
    "username": "alpisbay.arsenali",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alpisbay.arsenali/video/7546575301006920965",
    "videoId": "7546575301006920965"
  },
  {
    "id": "176",
    "username": "bibinluv.tt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7548398282028944662",
    "videoId": "7548398282028944662"
  },
  {
    "id": "177",
    "username": "salem.aruzhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@salem.aruzhan/video/7552455912590527800",
    "videoId": "7552455912590527800"
  },
  {
    "id": "178",
    "username": "whiteeflamee",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@whiteeflamee/video/7558442290444782904",
    "videoId": "7558442290444782904"
  },
  {
    "id": "179",
    "username": "daki.dora22",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@daki.dora22/video/7548467169135234317",
    "videoId": "7548467169135234317"
  },
  {
    "id": "180",
    "username": "faia_xo",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@faia_xo/video/7551504246139620619",
    "videoId": "7551504246139620619"
  },
  {
    "id": "181",
    "username": "kxkako",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kxkako/video/7547041691216252182",
    "videoId": "7547041691216252182"
  },
  {
    "id": "182",
    "username": "qorapqyz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@qorapqyz/video/7552116430175571256",
    "videoId": "7552116430175571256"
  },
  {
    "id": "183",
    "username": "samokamn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@samokamn/video/7549868261257530645",
    "videoId": "7549868261257530645"
  },
  {
    "id": "184",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "185",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7551637195354950934",
    "videoId": "7551637195354950934"
  },
  {
    "id": "186",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "187",
    "username": "erke._qyz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@erke._qyz/video/7549851352013212984",
    "videoId": "7549851352013212984"
  },
  {
    "id": "188",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "189",
    "username": "moniiaquen",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@moniiaquen/video/7552841375616716050",
    "videoId": "7552841375616716050"
  },
  {
    "id": "190",
    "username": "masculus.fara",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@masculus.fara/video/7551477689106976011",
    "videoId": "7551477689106976011"
  },
  {
    "id": "191",
    "username": "naz.saparova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@naz.saparova/video/7550736736205278520",
    "videoId": "7550736736205278520"
  },
  {
    "id": "192",
    "username": "aaugust21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aaugust21/video/7547939418493979960",
    "videoId": "7547939418493979960"
  },
  {
    "id": "193",
    "username": "naz.saparova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@naz.saparova/video/7550744976104246584",
    "videoId": "7550744976104246584"
  },
  {
    "id": "194",
    "username": "momvlog4",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@momvlog4/video/7552600090267897106",
    "videoId": "7552600090267897106"
  },
  {
    "id": "195",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7553204593266658582",
    "videoId": "7553204593266658582"
  },
  {
    "id": "196",
    "username": "farzuun",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@farzuun/video/7548515343400963384",
    "videoId": "7548515343400963384"
  },
  {
    "id": "197",
    "username": "zhorabekovnna",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhorabekovnna/video/7553562749951823115",
    "videoId": "7553562749951823115"
  },
  {
    "id": "198",
    "username": "vivien_pinduoduo",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@vivien_pinduoduo/video/7553734073894653240",
    "videoId": "7553734073894653240"
  },
  {
    "id": "199",
    "username": "camellia_kami",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@camellia_kami/video/7556231878785699083",
    "videoId": "7556231878785699083"
  },
  {
    "id": "200",
    "username": "021.bvl",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@021.bvl/video/7550402898786569490",
    "videoId": "7550402898786569490"
  },
  {
    "id": "201",
    "username": "aidana__turganova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aidana__turganova/video/7557260336999501068",
    "videoId": "7557260336999501068"
  },
  {
    "id": "202",
    "username": "gaukhar_amankosova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@gaukhar_amankosova/video/7544374071501294854",
    "videoId": "7544374071501294854"
  },
  {
    "id": "203",
    "username": "zhaksybaevaas",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhaksybaevaas/video/7551150375357648133",
    "videoId": "7551150375357648133"
  },
  {
    "id": "204",
    "username": "aalliyahh.k",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aalliyahh.k/video/7553943037152398648",
    "videoId": "7553943037152398648"
  },
  {
    "id": "205",
    "username": "serbolkyzy.a",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@serbolkyzy.a/video/7555322191215086860",
    "videoId": "7555322191215086860"
  },
  {
    "id": "206",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556715242563063052",
    "videoId": "7556715242563063052"
  },
  {
    "id": "207",
    "username": "akerke.zh.a",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@akerke.zh.a/video/7552936967038717195",
    "videoId": "7552936967038717195"
  },
  {
    "id": "208",
    "username": "naz.saparova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@naz.saparova/video/7551104704810421509",
    "videoId": "7551104704810421509"
  },
  {
    "id": "209",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "210",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7552921515377855756",
    "videoId": "7552921515377855756"
  },
  {
    "id": "211",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7555168480434179340",
    "videoId": "7555168480434179340"
  },
  {
    "id": "212",
    "username": "moniiaquen",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@moniiaquen/video/7549157652362792210",
    "videoId": "7549157652362792210"
  },
  {
    "id": "213",
    "username": "sweet.dream_by_diana",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@sweet.dream_by_diana/video/7557087037141175563",
    "videoId": "7557087037141175563"
  },
  {
    "id": "214",
    "username": "e1yakoon",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@e1yakoon/video/7545176509514894612",
    "videoId": "7545176509514894612"
  },
  {
    "id": "215",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7552980531487460619",
    "videoId": "7552980531487460619"
  },
  {
    "id": "216",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556717224849935628",
    "videoId": "7556717224849935628"
  },
  {
    "id": "217",
    "username": "lady_di_kz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lady_di_kz/video/7549296164865084728",
    "videoId": "7549296164865084728"
  },
  {
    "id": "218",
    "username": "sapeiren",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@sapeiren/video/7549622790417026326",
    "videoId": "7549622790417026326"
  },
  {
    "id": "219",
    "username": "kxkako",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kxkako/video/7547041691216252182",
    "videoId": "7547041691216252182"
  },
  {
    "id": "220",
    "username": "b._.u._.g._.a._.t._.t._i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@b._.u._.g._.a._.t._.t._i/video/7552186106683362616",
    "videoId": "7552186106683362616"
  },
  {
    "id": "221",
    "username": "snsnotepad",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@snsnotepad/video/7546440511146495234",
    "videoId": "7546440511146495234"
  },
  {
    "id": "222",
    "username": "faia_xo",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@faia_xo/video/7551504246139620619",
    "videoId": "7551504246139620619"
  },
  {
    "id": "223",
    "username": "samokamn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@samokamn/video/7549868261257530645",
    "videoId": "7549868261257530645"
  },
  {
    "id": "224",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7549107835519503638",
    "videoId": "7549107835519503638"
  },
  {
    "id": "225",
    "username": "shalkarovna_8",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@shalkarovna_8/video/7551787223599926539",
    "videoId": "7551787223599926539"
  },
  {
    "id": "226",
    "username": "momvlog4",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@momvlog4/video/7552600090267897106",
    "videoId": "7552600090267897106"
  },
  {
    "id": "227",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7551637195354950934",
    "videoId": "7551637195354950934"
  },
  {
    "id": "228",
    "username": "bibinluv01",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv01/video/7551379586559528248",
    "videoId": "7551379586559528248"
  },
  {
    "id": "229",
    "username": "qwerta017",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@qwerta017/video/7550567451637992710",
    "videoId": "7550567451637992710"
  },
  {
    "id": "230",
    "username": "doni.nur2",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@doni.nur2/video/7549558437802298629",
    "videoId": "7549558437802298629"
  },
  {
    "id": "231",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7545903796275170582",
    "videoId": "7545903796275170582"
  },
  {
    "id": "232",
    "username": "nazeka_a_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nazeka_a_/video/7545518198074903826",
    "videoId": "7545518198074903826"
  },
  {
    "id": "233",
    "username": "nurzh0n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurzh0n/video/7548130811090980102",
    "videoId": "7548130811090980102"
  },
  {
    "id": "234",
    "username": "bibinluv.tt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7549125863913049366",
    "videoId": "7549125863913049366"
  },
  {
    "id": "235",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396",
    "videoId": "7558727711175216396"
  },
  {
    "id": "236",
    "username": "selini.i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@selini.i/video/7557410601094384952",
    "videoId": "7557410601094384952"
  },
  {
    "id": "237",
    "username": "symbatyessirkep",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@symbatyessirkep/video/7553613955822783800",
    "videoId": "7553613955822783800"
  },
  {
    "id": "238",
    "username": "madeniyetzhetali",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@madeniyetzhetali/video/7546850506396667192",
    "videoId": "7546850506396667192"
  },
  {
    "id": "239",
    "username": "furshet_choco",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@furshet_choco/video/7556979034580700427",
    "videoId": "7556979034580700427"
  },
  {
    "id": "240",
    "username": "nurkeyevas1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkeyevas1/video/7548774643163811078",
    "videoId": "7548774643163811078"
  },
  {
    "id": "241",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7552951830863547670?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552951830863547670"
  },
  {
    "id": "242",
    "username": "salem.aruzhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@salem.aruzhan/video/7552455912590527800?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552455912590527800"
  },
  {
    "id": "243",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7556670810530778424?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556670810530778424"
  },
  {
    "id": "244",
    "username": "kxkako",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kxkako/video/7547240491167976727?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7547240491167976727"
  },
  {
    "id": "245",
    "username": "serbolkyzy.a",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@serbolkyzy.a/video/7551022228813565240?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7551022228813565240"
  },
  {
    "id": "246",
    "username": "zhannsayaa01",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhannsayaa01/video/7557773021222669580?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7557773021222669580"
  },
  {
    "id": "247",
    "username": "alia_abdirova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alia_abdirova/video/7552136532174310667?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552136532174310667"
  },
  {
    "id": "248",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7551390082436058390?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7551390082436058390"
  },
  {
    "id": "249",
    "username": "simba_ait1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@simba_ait1/video/7558112217846091030?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558112217846091030"
  },
  {
    "id": "250",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "251",
    "username": "kaspi_nakhotki",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kaspi_nakhotki/video/7547291892828949765?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7547291892828949765"
  },
  {
    "id": "252",
    "username": "fromanotherplanet07",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@fromanotherplanet07/video/7555179319044132152?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7555179319044132152"
  },
  {
    "id": "253",
    "username": "rustemovnadana1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@rustemovnadana1/video/7553955271714819331?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7553955271714819331"
  },
  {
    "id": "254",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7558188117547584780?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558188117547584780"
  },
  {
    "id": "255",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7556948025915002123?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556948025915002123"
  },
  {
    "id": "256",
    "username": "021.bvl",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@021.bvl/video/7550667178417163527?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7550667178417163527"
  },
  {
    "id": "257",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7553554987876551959?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7553554987876551959"
  },
  {
    "id": "258",
    "username": "bekizada_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bekizada_/video/7551443983663205644?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7551443983663205644"
  },
  {
    "id": "259",
    "username": "kozhakhmetova.tan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kozhakhmetova.tan/video/7556681668669492536?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556681668669492536"
  },
  {
    "id": "260",
    "username": "oncozy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@oncozy/video/7558430606158204182?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558430606158204182"
  },
  {
    "id": "261",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "262",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7545872952974200070?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7545872952974200070"
  },
  {
    "id": "263",
    "username": "errzzzattt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@errzzzattt/video/7556045515402513676?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556045515402513676"
  },
  {
    "id": "264",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7551060294567480598?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7551060294567480598"
  },
  {
    "id": "265",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7545872243172134150?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7545872243172134150"
  },
  {
    "id": "266",
    "username": "miracle_boooks",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@miracle_boooks/video/7548863916793679160?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7548863916793679160"
  },
  {
    "id": "267",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556321008672673035?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556321008672673035"
  },
  {
    "id": "268",
    "username": "suluface.kz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@suluface.kz/video/7558463159942614283?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558463159942614283"
  },
  {
    "id": "269",
    "username": "saayam_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@saayam_/video/7550031705432739128?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7550031705432739128"
  },
  {
    "id": "270",
    "username": "selini.i",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@selini.i/video/7558467878849187084?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558467878849187084"
  },
  {
    "id": "271",
    "username": "creative_hands8",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@creative_hands8/video/7558502287417691399?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558502287417691399"
  },
  {
    "id": "272",
    "username": "mahonnik",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mahonnik/video/7552060369133505803?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552060369133505803"
  },
  {
    "id": "273",
    "username": "baizhaanovnaa",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@baizhaanovnaa/video/7550243093652540689?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7550243093652540689"
  },
  {
    "id": "274",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "275",
    "username": "elyaym",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@elyaym/video/7558436941612584194?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558436941612584194"
  },
  {
    "id": "276",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556320868620717323?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556320868620717323"
  },
  {
    "id": "277",
    "username": "mmmilky.way",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mmmilky.way/video/7558461125789093132?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558461125789093132"
  },
  {
    "id": "278",
    "username": "zhanbotin_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@zhanbotin_/video/7558409692402240780?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558409692402240780"
  },
  {
    "id": "279",
    "username": "yos_hii",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yos_hii/video/7558475518941629708?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558475518941629708"
  },
  {
    "id": "280",
    "username": "psychomusefeelvibe",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@psychomusefeelvibe/video/7546992845626838328?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7546992845626838328"
  },
  {
    "id": "281",
    "username": "alpisbay.arsenali",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alpisbay.arsenali/video/7546575301006920965?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7546575301006920965"
  },
  {
    "id": "282",
    "username": "bekizada_",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bekizada_/video/7552083323774864652?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552083323774864652"
  },
  {
    "id": "283",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7553388651296738571?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7553388651296738571"
  },
  {
    "id": "284",
    "username": "yuu_sangre",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yuu_sangre/video/7558402834006396216?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558402834006396216"
  },
  {
    "id": "285",
    "username": "lumivee7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@lumivee7/video/7553204593266658582?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7553204593266658582"
  },
  {
    "id": "286",
    "username": "18.o9.o7",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@18.o9.o7/video/7547292995201109304?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7547292995201109304"
  },
  {
    "id": "287",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "288",
    "username": "janarmasilova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@janarmasilova/video/7558377415509134604?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558377415509134604"
  },
  {
    "id": "289",
    "username": "bibinluv.tt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7548398282028944662?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7548398282028944662"
  },
  {
    "id": "290",
    "username": "aqylbek.arys",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aqylbek.arys/video/7549911507950259512?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7549911507950259512"
  },
  {
    "id": "291",
    "username": "nurkozhaeva_m",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nurkozhaeva_m/video/7555429156285058316?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7555429156285058316"
  },
  {
    "id": "292",
    "username": "vmestesrahimova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@vmestesrahimova/video/7557852783932722443?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7557852783932722443"
  },
  {
    "id": "293",
    "username": "pindyodyo_0",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@pindyodyo_0/video/7548466145485966598?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7548466145485966598"
  },
  {
    "id": "294",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "295",
    "username": "aisozhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aisozhan/video/7555919004854914324?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7555919004854914324"
  },
  {
    "id": "296",
    "username": "aruzhan_qambarbek",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aruzhan_qambarbek/video/7557733588481903884?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7557733588481903884"
  },
  {
    "id": "297",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7556834806131068171?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556834806131068171"
  },
  {
    "id": "298",
    "username": "ananayin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@ananayin/video/7550229472004295958?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7550229472004295958"
  },
  {
    "id": "299",
    "username": "gaukhar_amankosova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@gaukhar_amankosova/video/7544374071501294854?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7544374071501294854"
  },
  {
    "id": "300",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "301",
    "username": "erke._qyz",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@erke._qyz/video/7549851352013212984?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7549851352013212984"
  },
  {
    "id": "302",
    "username": "a_aiymka",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@a_aiymka/video/7556551583106878731?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556551583106878731"
  },
  {
    "id": "303",
    "username": "k.lunnn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@k.lunnn/video/7552478798566984971?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552478798566984971"
  },
  {
    "id": "304",
    "username": "gulnaz4666",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@gulnaz4666/video/7547337651632819478?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7547337651632819478"
  },
  {
    "id": "305",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556717758076046648?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556717758076046648"
  },
  {
    "id": "306",
    "username": "8oxhwan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@8oxhwan/video/7557442608373566731?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7557442608373566731"
  },
  {
    "id": "307",
    "username": "nzbkvn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@nzbkvn/video/7552895650443087160?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552895650443087160"
  },
  {
    "id": "308",
    "username": "dzzhanel",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@dzzhanel/video/7552863371490626872?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552863371490626872"
  },
  {
    "id": "309",
    "username": "yarikzhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yarikzhan/video/7552965803021290763?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552965803021290763"
  },
  {
    "id": "310",
    "username": "k.rusgul.s95",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@k.rusgul.s95/video/7558395955523996939?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558395955523996939"
  },
  {
    "id": "311",
    "username": "aalliyahh.k",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aalliyahh.k/video/7553943037152398648?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7553943037152398648"
  },
  {
    "id": "312",
    "username": "u.sauletkyzy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@u.sauletkyzy/video/7556715152951790859?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556715152951790859"
  },
  {
    "id": "313",
    "username": "k.lunnn",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@k.lunnn/video/7557737610093874444?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7557737610093874444"
  },
  {
    "id": "314",
    "username": "aruzhan_qambarbek",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@aruzhan_qambarbek/video/7557722546678795576?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7557722546678795576"
  },
  {
    "id": "315",
    "username": "naz.saparova",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@naz.saparova/video/7550744976104246584?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7550744976104246584"
  },
  {
    "id": "316",
    "username": "021.bvl",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@021.bvl/video/7550402898786569490?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7550402898786569490"
  },
  {
    "id": "317",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "318",
    "username": "madeniyetzhetali",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@madeniyetzhetali/video/7546850506396667192?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7546850506396667192"
  },
  {
    "id": "319",
    "username": "salem.aruzhan",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@salem.aruzhan/video/7552455912590527800?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7552455912590527800"
  },
  {
    "id": "320",
    "username": "alexey.tin",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@alexey.tin/video/7558568446242360594?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558568446242360594"
  },
  {
    "id": "321",
    "username": "carpe_diem2313",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@carpe_diem2313/video/7556948025915002123?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7556948025915002123"
  },
  {
    "id": "322",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "323",
    "username": "yerbolovna21",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@yerbolovna21/video/7558733249271418124?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558733249271418124"
  },
  {
    "id": "324",
    "username": "bibinluv.tt",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@bibinluv.tt/video/7548398282028944662?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7548398282028944662"
  },
  {
    "id": "325",
    "username": "kxkako",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@kxkako/video/7547041691216252182?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7547041691216252182"
  },
  {
    "id": "326",
    "username": "mivya.n",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@mivya.n/video/7545903796275170582?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7545903796275170582"
  },
  {
    "id": "327",
    "username": "el_lkaressov",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@el_lkaressov/video/7558727711175216396?lang=ru-RU",
    "videoId": "7558727711175216396"
  },
  {
    "id": "328",
    "username": "daxaaa1",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@daxaaa1/video/7558394540399414539?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558394540399414539"
  },
  {
    "id": "329",
    "username": "sapeiren",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@sapeiren/video/7549622790417026326?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7549622790417026326"
  },
  {
    "id": "330",
    "username": "oncozy",
    "avatar": "🎲",
    "videoUrl": "https://www.tiktok.com/@oncozy/video/7558430606158204182?q=jp%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B8&t=1759919408734",
    "videoId": "7558430606158204182"
  }
];

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<TikTokUser | null>(null);
  const [currentUsers, setCurrentUsers] = useState<TikTokUser[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [spinInterval, setSpinInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (winner) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setConfetti(newConfetti);
    }
  }, [winner]);

  useEffect(() => {
    if (showModal && winner?.videoId && !embedLoaded) {
      const loadEmbedScript = () => {
        if ((window as any).tiktokEmbed) {
          (window as any).tiktokEmbed.lib.render(document.getElementById('tiktok-embed-container'));
        }
      };

      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = loadEmbedScript;
      document.head.appendChild(script);
      setEmbedLoaded(true);

      return () => {
        const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [showModal, winner, embedLoaded]);

  const startLottery = () => {
    setIsSpinning(true);
    setWinner(null);
    setShowModal(false);
    setConfetti([]);

    const interval = setInterval(() => {
      const randomUsers = [...mockUsers].sort(() => Math.random() - 0.5).slice(0, 3);
      setCurrentUsers(randomUsers);
    }, 100);

    setSpinInterval(interval);
  };

  const stopLottery = () => {
    if (spinInterval) {
      clearInterval(spinInterval);
      setSpinInterval(null);
    }
    const finalWinner = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    setWinner(finalWinner);
    setIsSpinning(false);
    setTimeout(() => setShowModal(true), 1000);
  };

  const closeModal = () => {
    setShowModal(false);
    setEmbedLoaded(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Confetti effect */}
      {winner && confetti.map((item) => (
        <div
          key={item.id}
          className="absolute top-0 animate-fall"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            fontSize: '24px',
          }}
        >
          {Math.random() > 0.5 ? '₸' : '✨'}
        </div>
      ))}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-2 animate-pulse">
              1 000 000 ₸ ұтып ал!
            </h1>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Left Side - TikTok */}
          <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 border-4 border-green-500 flex flex-col">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <h2 className="text-4xl font-bold text-gray-900">TikTok</h2>
            </div>

            {/* Lottery Display */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 flex-1 flex flex-col items-center justify-center">
              {!winner && !isSpinning && (
                <div className="text-center">
                  <img src="/jana_cup.png" alt="Trophy" className="w-40 h-40 mx-auto mb-4 object-contain" />
                  <p className="text-4xl text-gray-900 font-black">Жеңімпазды анықтауға дайынсыз ба?</p>
                </div>
              )}

              {isSpinning && (
                <div className="space-y-4 w-full">
                  <p className="text-xl text-center text-gray-700 font-semibold mb-4">Жеңімпазды таңдап жатырмыз...</p>
                  {currentUsers.map((user, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg animate-bounce"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-4xl">{user.avatar}</div>
                      <div className="text-xl font-bold text-gray-800">{user.username}</div>
                    </div>
                  ))}
                </div>
              )}

              {winner && !showModal && (
                <div className="text-center w-full animate-scale-in">
                  <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-2xl p-8 shadow-2xl">
                    <p className="text-5xl font-bold text-green-900 mb-6">Құттықтаймыз!</p>
                    <div className="bg-white rounded-xl p-8 inline-block">
                      <div className="text-8xl mb-4">{winner.avatar}</div>
                      <div className="text-5xl font-bold text-gray-900 mb-4">{winner.username}</div>
                    </div>
                    <p className="text-5xl font-bold text-green-900 mt-6 leading-tight">
                      1 000 000 ₸<br />ұтып ал!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Start/Stop Buttons */}
            {!isSpinning ? (
              <button
                onClick={startLottery}
                className="w-full mt-6 py-5 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-xl bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-900"
              >
                {winner ? 'Қайта бастау' : 'Ұтысты бастау!'}
              </button>
            ) : (
              <button
                onClick={stopLottery}
                className="w-full mt-6 py-5 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
              >
                Тоқтату!
              </button>
            )}
          </div>

          {/* Right Side - JANA POST */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-16 border-4 border-green-500 w-full h-full flex flex-col items-center justify-center transform hover:scale-105 transition-transform">
              <img
                src="/jana-post-logo.svg"
                alt="JANA POST"
                className="w-full h-auto"
                style={{ filter: 'invert(32%) sepia(78%) saturate(1034%) hue-rotate(86deg) brightness(93%) contrast(89%)' }}
              />
              <div className="mt-12 flex gap-4 justify-center">
                <Sparkles className="w-14 h-14 animate-spin-slow drop-shadow-lg" style={{ color: '#1C8818' }} />
                <Sparkles className="w-14 h-14 animate-spin-slow drop-shadow-lg" style={{ color: '#1C8818', animationDelay: '0.5s' }} />
                <Sparkles className="w-14 h-14 animate-spin-slow drop-shadow-lg" style={{ color: '#1C8818', animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-white space-y-6">
          <p className="text-3xl font-bold">🎁 #jpнаходки хэштегімен видео түсіріп, 1 000 000 теңге ұтып алыңыз! 🎁</p>

          {/* Large Hashtag Display */}
          <div className="py-12 bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/30">
            <div className="text-7xl font-black text-white drop-shadow-2xl tracking-wider">
              #jpнаходки
            </div>
          </div>
        </div>
      </div>

      {/* Winner Modal */}
      {showModal && winner && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto relative animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-4xl font-bold z-10"
            >
              ×
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-5xl font-bold text-green-700 mb-4">Құттықтаймыз!</h2>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-6 inline-block shadow-xl">
                  <div className="text-7xl mb-3">{winner.avatar}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{winner.username}</div>
                  <div className="text-3xl font-bold text-green-800"> жеңіп алды!</div>
                </div>
              </div>

              {/* Video Player */}
              <div className="flex justify-center" id="tiktok-embed-container">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/${winner.username}/video/${winner.videoId}`}
                  data-video-id={winner.videoId}
                  style={{ maxWidth: '605px', minWidth: '325px' }}
                >
                  <section>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={winner.username}
                      href={`https://www.tiktok.com/${winner.username}?refer=embed`}
                    >
                      {winner.username}
                    </a>
                    <p>Loading TikTok video...</p>
                  </section>
                </blockquote>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-4 rounded-xl text-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Жабу
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
