import Choices from 'choices.js';

const choicesWall = document.querySelectorAll('[data-choices]');
if(choicesWall.length > 0){
  choicesWall.forEach(el=>{
    if (el.dataset.choices === 'ceiling') {
      const choicesCeiling = new Choices(el, {
        searchEnabled: false,
        renderChoiceLimit: -1,

        choices: [{
          value: '10',
          label: '10см (+? руб)',
          selected: true,
          disabled: false,
        },
        {
          value: '20',
          label: '20см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '30',
          label: '30см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '40',
          label: '40см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '50',
          label: '50см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '60',
          label: '60см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '70',
          label: '70см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '80',
          label: '80см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '90',
          label: '90см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '100',
          label: '100см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '110',
          label: '110см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '120',
          label: '120см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '130',
          label: '130см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '140',
          label: '140см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '150',
          label: '150см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '160',
          label: '160см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '170',
          label: '170см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '180',
          label: '180см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '190',
          label: '190см (+? руб)',
          selected: false,
          disabled: false,
        },
        {
          value: '200',
          label: '200см (+? руб)',
          selected: false,
          disabled: false,
        },],
      });
    } else if (el.dataset.choices === 'insulation') {
      const choicesCeiling = new Choices(el, {
        searchEnabled: false,
        renderChoiceLimit: -1,

        choices:
        [
          {
            value: '50',
            label: '+50мм',
            selected: false,
            disabled: false,
          },
          {
            value: '100',
            label: '+100мм',
            selected: false,
            disabled: false,
          },
          {
            value: '150',
            label: '+150мм',
            selected: false,
            disabled: false,
          },
          {
            value: '200',
            label: '+200мм',
            selected: false,
            disabled: false,
          },
        ],
      });
    } else if (el.dataset.choices === 'bath_square') {
      const choicesCeiling = new Choices(el, {
        searchEnabled: false,
        renderChoiceLimit: -1,

        choices:
        [
          {
            value: '0.5',
            label: '0.5 м2',
            selected: false,
            disabled: false,
          },
          {
            value: '1',
            label: '1 м2',
            selected: false,
            disabled: false,
          },
          {
            value: '1.5',
            label: '+1.5 м2',
            selected: false,
            disabled: false,
          },
          {
            value: '2',
            label: '2 м2',
            selected: false,
            disabled: false,
          },
        ],
      });
    } else if (el.dataset.choices === 'septik_people') {
      const choicesCeiling = new Choices(el, {
        searchEnabled: false,
        renderChoiceLimit: -1,

        choices:
        [
          {
            value: '1',
            label: '1',
            selected: false,
            disabled: false,
          },
          {
            value: '2',
            label: '2',
            selected: false,
            disabled: false,
          },
          {
            value: '3',
            label: '3',
            selected: false,
            disabled: false,
          },
          {
            value: '4',
            label: '4',
            selected: false,
            disabled: false,
          },
        ],
      });
    }
  })
}
