import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
    title: 'FINANCEIRO',
    icon: 'layout-outline',
    children: [

      {
        title: 'Gerar Boleto',
        link: '/pages/financeiro/gerar-boleto/adicionar',
      },

      {
        title: 'Receber Conta',
        link: '/pages/financeiro/gerar-boleto/adicionar',
      },

      {
        title: 'Boleto',
        link: '/pages/financeiro/boleto',
      },

    ],
  },

  {
    title: 'CAIXA',
    icon: 'book-outline',
    children: [
      {
        title: 'Fluxo',
        link: '/pages/caixa/fluxo',
      },
      {
        title: 'Receber',
        link: '/pages/caixa/receber',
      },
    ],
  },

  {
    title: 'Coleta',
    icon: 'book-outline',
    children: [
      {
        title: 'Qualidade',
        link: '/pages/coleta',
      },
    ],
  }

];
