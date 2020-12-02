import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages',
  },

  {
    title: 'CADASTROS',
    icon: 'archive-outline',
    children: [
      {
        title: 'Logradouro',
        link: '/pages/cadastro/logradouro/listar',
      },
      {
        title: 'Matrícula',
        link: '/pages/cadastro/matricula/listar',
      },
      {
        title: 'Grupo',
        link: '/pages/cadastro/grupo/listar',
      },
      {
        title: 'Cliente',
        link: '/pages/cadastro/cliente/listar',
      },
      {
        title: 'Contrato',
        link: '/pages/cadastro/contrato/listar',
      },
    ],
  },
  {
    title: 'ANÁLISE',
    icon: 'book-outline',
    children: [
      {
        title: 'Qualidade Água',
        link: '/pages/analise/listar',
      },
      {
        title: 'Hidrômetro',
        link: '/pages/hidrometro/listar',
      },
    ],
  },
  {
    title: 'FINANCEIRO',
    icon: 'layout-outline',
    children: [

      {
        title: 'Boleto',
        link: '/pages/financeiro/boleto/listar',
      },

      {
        title: 'Gerar Boleto',
        link: '/pages/financeiro/gerar-boleto/adicionar',
      },

      {
        title: 'Receber Conta',
        link: '/pages/financeiro/gerar-boleto/adicionar',
      },

    ],
  },

  {
    title: 'CAIXA',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Movimentações',
        link: '/pages/caixa/movimentacao',
      },
      {
        title: 'Receber',
        link: '/pages/caixa/receber',
      },
    ],
  },

  {
    title: 'OUTROS',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Comunicacão',
        link: '/pages/caixa/movimentacao',
      },
      {
        title: 'Eleição',
        link: '/pages/caixa/receber',
      },
    ],
  },


  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },



];
