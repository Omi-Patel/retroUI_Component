import FloppyDropzone from '../../components/FileUploads/FloppyDropzone';
import FloppyDropzoneSrc from '../../components/FileUploads/FloppyDropzone.jsx?raw';
import ScannerUpload from '../../components/FileUploads/ScannerUpload';
import ScannerUploadSrc from '../../components/FileUploads/ScannerUpload.jsx?raw';
import MailSlotUpload from '../../components/FileUploads/MailSlotUpload';
import MailSlotUploadSrc from '../../components/FileUploads/MailSlotUpload.jsx?raw';
import PolaroidUpload from '../../components/FileUploads/PolaroidUpload';
import PolaroidUploadSrc from '../../components/FileUploads/PolaroidUpload.jsx?raw';

export const fileUploadComponents = [
  {
    name: 'FloppyDropzone',
    component: FloppyDropzone,
    code: FloppyDropzoneSrc,
  },
  {
    name: 'ScannerUpload',
    component: ScannerUpload,
    code: ScannerUploadSrc,
  },
  {
    name: 'MailSlotUpload',
    component: MailSlotUpload,
    code: MailSlotUploadSrc,
  },
  {
    name: 'PolaroidUpload',
    component: PolaroidUpload,
    code: PolaroidUploadSrc,
  },
];

export default fileUploadComponents;
