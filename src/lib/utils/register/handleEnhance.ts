import type { SubmitFunction } from '@sveltejs/kit';
import { handleFormResult } from './handleFormResult';
import { loading } from '../message/loadingStatus';

export const handleEnhance: SubmitFunction = () => {
	// langsung trigger loading sebelum submit ke server
	loading();

	return async ({ result }) => {
		await handleFormResult(result);
	};
};
