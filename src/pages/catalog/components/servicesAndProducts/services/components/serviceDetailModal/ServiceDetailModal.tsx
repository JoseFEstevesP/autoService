import Modal from '../../../../../../../components/modal/Modal';
import type { UseModalReturn } from '../../../../../../../components/modal/types';
import type { ServiceType } from '../../../types';
import ServiceDetail from '../serviceDetail/ServiceDetail';

const ServiceDetailModal = ({
	serviceDetailModal,
	dataDetail,
}: {
	dataDetail?: ServiceType;
	serviceDetailModal: UseModalReturn;
}) => {
	return (
		<>
			<Modal
				isOpen={serviceDetailModal.isOpen}
				handleClose={serviceDetailModal.handleClose}
			>
				<ServiceDetail data={dataDetail} />
			</Modal>
		</>
	);
};
export default ServiceDetailModal;
