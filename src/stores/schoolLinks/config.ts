import FaServer from 'svelte-icons/fa/FaServer.svelte';
import FaMicrosoft from 'svelte-icons/fa/FaMicrosoft.svelte';
import FaLaptopCode from 'svelte-icons/fa/FaLaptopCode.svelte';
import MdOndemandVideo from 'svelte-icons/md/MdOndemandVideo.svelte';

const data = [
  {
    color: '#2563eb',
    name: '南工在线',
    icon: MdOndemandVideo,
    link: 'https://online.njtech.edu.cn',
    subtitle: '南工视频在线播放平台',
    tags: ['视频', '学习']
  },
  {
    color: '#4f46e5',
    name: '正版化平台',
    icon: FaMicrosoft,
    link: 'https://soft.njtech.edu.cn',
    subtitle: '南工正版化平台',
    tags: ['软件', '正版化']
  },
  {
    color: '#0d9488',
    name: '南工镜像站',
    icon: FaServer,
    link: 'https://mirrors.njtech.edu.cn',
    subtitle: '南工镜像站',
    tags: ['镜像站']
  },
  {
    color: '#65a30d',
    name: '南工在线评测系统',
    icon: FaLaptopCode,
    link: 'https://acm.online.njtech.edu.cn',
    subtitle: '南工在线评测系统',
    tags: ['学习']
  }
];

export default data;
