import store from '../store/store'

const locales = {
  en: {
    filters: [
      {
        label: 'Id',
        name: 'id',
        type: 'filter'
      },
      {
        label: 'Name',
        name: 'name',
        type: 'filter'
      },
      {
        label: 'Age',
        name: 'age',
        type: 'filter'
      },
      {
        label: 'Increase',
        name: 'increase',
        type: 'orderBy'
      },
      {
        label: 'Decrease',
        name: 'decrease',
        type: 'orderBy'
      }
    ],
    views: [
      {
        label: 'Table',
        name: 'table',
        type: 'view'
      },
      {
        label: 'Preview',
        name: 'preview',
        type: 'view'
      }
    ]
  },
  ru: {
    filters: [
      {
        label: 'Номер',
        name: 'id',
        type: 'filter'
      },
      {
        label: 'Имя',
        name: 'name',
        type: 'filter'
      },
      {
        label: 'Возраст',
        name: 'age',
        type: 'filter'
      },
      {
        label: 'По возрастанию',
        name: 'increase',
        type: 'orderBy'
      },
      {
        label: 'По убыванию',
        name: 'decrease',
        type: 'orderBy'
      }
    ],
    views: [
      {
        label: 'Таблица',
        name: 'table',
        type: 'view'
      },
      {
        label: 'Превью',
        name: 'preview',
        type: 'view'
      }
    ]
  }
}

export default function localizeFilter(key) {
  const locale = store.getState().lang
  return locales[locale][key]
}
