import FaLinux from "svelte-icons/fa/FaLinux.svelte";
import FaAward from "svelte-icons/fa/FaAward.svelte";
import MdSchool from "svelte-icons/md/MdSchool.svelte";
import FaServer from "svelte-icons/fa/FaServer.svelte";
import MdComputer from "svelte-icons/md/MdComputer.svelte";
import FaMicrosoft from "svelte-icons/fa/FaMicrosoft.svelte";
import FaLaptopCode from "svelte-icons/fa/FaLaptopCode.svelte";
import MdOndemandVideo from "svelte-icons/md/MdOndemandVideo.svelte";

// 图标前往这个网址查找：https://svelte-icons.vercel.app/
const data = [
  {
    name: "南工在线",
    icon: MdOndemandVideo,
    link: "https://online.njtech.edu.cn",
    subtitle: "南工在线视频播放平台",
    tags: ["校内", "视频"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "正版化平台",
    icon: FaMicrosoft,
    link: "https://soft.njtech.edu.cn",
    subtitle: "南工正版化平台",
    tags: ["校内", "软件"],
    heat: 0.8,
    pinned: true
  },
  {
    name: "南工镜像站",
    icon: FaServer,
    link: "https://mirrors.njtech.edu.cn",
    subtitle: "南工镜像站",
    tags: ["校内", "镜像站"],
    heat: 0.75,
    pinned: true
  },
  {
    name: "南工在线评测系统",
    icon: FaLaptopCode,
    link: "https://acm.online.njtech.edu.cn",
    subtitle: "南工在线评测系统",
    tags: ["校内", "学习"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "清华大学tuna协会",
    icon: MdSchool,
    link: "https://tuna.moe",
    subtitle: "清华大学tuna协会",
    tags: ["校外", "镜像站"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "远景实验室",
    icon: FaAward,
    link: "https://www.vistalab.top/",
    subtitle: "南工远景实验室",
    tags: ["校内", "组织"],
    heat: 0.8,
    pinned: true
  },
  {
    name: "中国科学技术大学Linux用户协会",
    icon: FaLinux,
    link: "https://lug.ustc.edu.cn",
    subtitle: "中国科学技术大学Linux用户协会",
    tags: ["校外", "组织", "Linux"],
    heat: 0.8,
    pinned: false
  },
  {
    name: "南方科技大学计算机研究协会",
    icon: MdComputer,
    link: "https://www.cra.moe",
    subtitle: "南方科技大学计算机研究协会",
    tags: ["校外", "组织"],
    heat: 0.8,
    pinned: false
  }
];

export default data;
