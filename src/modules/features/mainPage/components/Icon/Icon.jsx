import { ReactComponent as ArrowDownIcon } from '../../../../../common/icons/v_arrow.svg';
import { ReactComponent as CancelIcon } from '../../../../../common/icons/abort.svg';
import { ReactComponent as NewIcon } from '../../../../../common/icons/dot.svg';
import { ReactComponent as DoneIcon } from '../../../../../common/icons/checkmark.svg';
import { ReactComponent as EditIcon } from '../../../../../common/icons/pencil.svg';
import { ReactComponent as DeleteIcon } from '../../../../../common/icons/bin.svg';


export const Icon = ({type, style, color, ...props}) => {
  const stroke = color ? color : '#BAD8F5';

  switch (type) {
    case 'delete':
      const styleDeleteIcon = {
        width: '16px',
        height: '16px',
      }
      return <DeleteIcon style={{...styleDeleteIcon, ...style}} stroke="#fff" {...props} />;
    case 'edit':
      const styleEditIcon = {
        width: '16px',
        height: '16px',
      }
      return <EditIcon style={{...styleEditIcon, ...style}} stroke="#fff"  {...props} />;
    case 'done':
      const styleDoneIcon= {
        width: '16px',
        height: '16px',
      }
      return <DoneIcon style={{...styleDoneIcon, ...style}} fill={stroke}  {...props} />;
    case 'new':
      const styleNewIcon= {
        width: '16px',
        height: '16px',
      }
      return <NewIcon style={{...styleNewIcon, ...style}} fill={stroke}  {...props} />;
    case 'cancel':
      const styleIcon = {
        width: '16px',
        height: '16px',
      }
      return <CancelIcon style={{...styleIcon, ...style}} fill={stroke}  {...props} />;
    case 'arrow-down':
      const styleArrowDownIcon = {
        width: '16px',
        height: '16px',
      }
      return <ArrowDownIcon style={{...styleArrowDownIcon, ...style}} fill={stroke}  {...props} />;
    default:
      return <></>;
  }
}
