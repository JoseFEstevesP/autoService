import { useCallback, useState } from 'react';
import useModal from '@/components/ui/modal/hooks/useModal';
import type { ServiceType } from '../../../../types';

const useServiceDetailModal = () => {
	const [dataDetail, setDataDetail] = useState<ServiceType>();
	const serviceDetailModal = useModal({});

	const handleData = useCallback(
		(service: ServiceType) => {
			setDataDetail(service);
			serviceDetailModal.handleOpen();
		},
		[serviceDetailModal],
	);

	return { dataDetail, handleData, serviceDetailModal };
};
export default useServiceDetailModal;
