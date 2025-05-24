import { execSync } from 'child_process';
import { basename, extname } from 'path';

// Función para obtener archivos staged
function getStagedFiles() {
	try {
		const output = execSync('git diff --name-only --cached').toString();
		return output.split('\n').filter(file => file.trim() !== '');
	} catch (e) {
		console.log('⚠️ No se encontraron archivos staged.');
		return [];
	}
}

// Función para generar un mensaje de commit
function generateCommitMessage(stagedFiles) {
	// Tipos comunes de Conventional Commits
	const types = {
		'.js': 'feat',
		'.ts': 'feat',
		'.jsx': 'feat',
		'.tsx': 'feat',
		'.vue': 'feat',
		'.svelte': 'feat',
		'.css': 'style',
		'.scss': 'style',
		'.json': 'chore',
		'.md': 'docs',
		'.test.js': 'test',
		'.spec.ts': 'test',
	};

	if (stagedFiles.length === 0) return '';

	const grouped = stagedFiles.reduce((acc, file) => {
		const ext = extname(file);
		const type = types[ext] || 'chore';
		acc[type] = acc[type] || [];
		acc[type].push(basename(file, ext));
		return acc;
	}, {});

	let message = '';
	for (const [type, files] of Object.entries(grouped)) {
		message += `${type}: ${files.join(', ')}\n`;
	}

	return message.trim();
}

// Obtener archivos staged
const stagedFiles = getStagedFiles();

if (stagedFiles.length > 0) {
	// Generar mensaje de commit
	const commitMessage = generateCommitMessage(stagedFiles);

	// Mostrar mensaje generado
	console.log(`Mensaje de commit generado:\n${commitMessage}`);

	// Hacer commit automáticamente (sin saltos de línea)
	execSync(`git commit -m "${commitMessage.replace(/\n/g, ' | ')}"`);
	console.log('✅ Commit realizado automáticamente.');
} else {
	console.log('⚠️ No hay archivos staged. Añade archivos con `git add`.');
}
