
interface ITag {
	id: number;
	name: string;
}

interface ITodoList {
	id: number;
	contents: string;
	complete: boolean;
	category: string;
	tags: ITag[];
}

const todoList: ITodoList[] = [];

/**
 * 할 일 추가
 * contents 내용이 비었다면 내용 없이 추가 가능
 */
function onCreateTodoListTs(contents: string, category: string, tags: ITag[]) {}

/**
 * 모든 할 일 조회
 */
function viewAllTodoListTs(): ITodoList[] {
	const list: ITodoList[] = [];

	return list
}

/**
 * ID를 기반으로 특정 할 일 조회
 */
function viewTodoListByIdTs(id: string): ITodoList[] {
	const list: ITodoList[] = [];

	return list
}

/**
 * 할 일 속성 수정 - ID 제외
 * 속성이 바뀌지 않는다면, 기존 데이터로 유지
 */
function onChangeTodoListTs({id, contents, complete, category, tags}: ITodoList) {}

/**
 * 특정 할 일의 특정 태그 수정
 */
function onChangeTagsByIdTs(id: number, tags: ITag[]) {}

/**
 * ID를 기반으로 특정 할 일 삭제
 */
function onRemoveTodoListByIdTs(id: number) {}

/**
 * 모든 할 일 제거
 */
function onRemoveAllTodoListTs() {}

/**
 * 특정 할 일의 특정 태그 삭제
 * tags가 빈 배열로 들어온다면 모든 태그 삭제
 */
function onRemoveTagsByIdTs(id: number, tags: ITag[]) {}