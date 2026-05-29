import TypewriterDropdown from '../../components/Dropdowns/TypewriterDropdown';
import TypewriterDropdownSrc from '../../components/Dropdowns/TypewriterDropdown.jsx?raw';
import FileCabinetDropdown from '../../components/Dropdowns/FileCabinetDropdown';
import FileCabinetDropdownSrc from '../../components/Dropdowns/FileCabinetDropdown.jsx?raw';
import NeonDropdown from '../../components/Dropdowns/NeonDropdown';
import NeonDropdownSrc from '../../components/Dropdowns/NeonDropdown.jsx?raw';
import ZineDropdown from '../../components/Dropdowns/ZineDropdown';
import ZineDropdownSrc from '../../components/Dropdowns/ZineDropdown.jsx?raw';

export const dropdownComponents = [
  {
    name: 'TypewriterDropdown',
    component: TypewriterDropdown,
    code: TypewriterDropdownSrc,
  },
  {
    name: 'FileCabinetDropdown',
    component: FileCabinetDropdown,
    code: FileCabinetDropdownSrc,
  },
  {
    name: 'NeonDropdown',
    component: NeonDropdown,
    code: NeonDropdownSrc,
  },
  {
    name: 'ZineDropdown',
    component: ZineDropdown,
    code: ZineDropdownSrc,
  },
];

export default dropdownComponents;
