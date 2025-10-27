export type BuildMode = 'development' | 'production';
export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}
export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
}

// Определяет типы и структуры данных (режим, пути, порт), чтобы всё было понятно и безопасно (TypeScript не даст ошибиться).
