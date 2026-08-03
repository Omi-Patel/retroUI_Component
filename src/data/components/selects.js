import NewsprintSelect from '../../components/Selects/NewsprintSelect';
import NewsprintSelectSrc from '../../components/Selects/NewsprintSelect.jsx?raw';
import TerminalCombobox from '../../components/Selects/TerminalCombobox';
import TerminalComboboxSrc from '../../components/Selects/TerminalCombobox.jsx?raw';
import TagMultiSelect from '../../components/Selects/TagMultiSelect';
import TagMultiSelectSrc from '../../components/Selects/TagMultiSelect.jsx?raw';
import ChannelDialSelect from '../../components/Selects/ChannelDialSelect';
import ChannelDialSelectSrc from '../../components/Selects/ChannelDialSelect.jsx?raw';

export const selectComponents = [
  {
    name: 'NewsprintSelect',
    component: NewsprintSelect,
    code: NewsprintSelectSrc,
  },
  {
    name: 'TerminalCombobox',
    component: TerminalCombobox,
    code: TerminalComboboxSrc,
  },
  {
    name: 'TagMultiSelect',
    component: TagMultiSelect,
    code: TagMultiSelectSrc,
  },
  {
    name: 'ChannelDialSelect',
    component: ChannelDialSelect,
    code: ChannelDialSelectSrc,
  },
];

export default selectComponents;
