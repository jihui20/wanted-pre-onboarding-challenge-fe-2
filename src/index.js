/**
 * TODO APP 
 * @author jihui
 */

/**
 * TODO 리스트의 정보를 담는 객체
 * @typedef {object} TodoList
 * @property {number} id 리스트 아이디
 * @property {string} constents 리스트 내용
 * @property {boolean} complete 리스트 완료 여부
 * @property {string} category 리스트 카테고리
 * @property {string[]} tags 리스트 태그들
 */
const TodoList = {
	id: 0,
	contents: '',
	complete: false,
	category: '',
	tags: [] 
}

/**
 * 할 일 추가
 * contents 내용이 비었다면 내용 없이 추가 가능
 * @param {string} contents 할 일 내용
 * @param {string} category 카테고리
 * @param {string[]} tags 관련 태그들
 */
function onCreateTodoList(contents, category, tags) {}

/**
 * 모든 할 일 조회
 * @returns {TodoList[]} 모든 할 일 리스트
 */
function viewAllTodoList() {
	// ...
	return list
}

/**
 * ID를 기반으로 특정 할 일 조회
 * @param {number} id 아이디
 * @returns {TodoList[]} 아이디의 리스트
 */
function viewTodoListById(id) {
	// ...
	return list
}

/**
 * 할 일 속성 수정 - ID 제외
 * 속성이 바뀌지 않는다면, 기존 데이터로 유지
 * @param {number} id 아이디 - 조회만 가능
 * @param {string} contents 내용
 * @param {boolean} complete 완료여부
 * @param {string} category 카테고리
 * @param {string[]} tags 관련 태그들
 */
function onChangeTodoList(id, contents, complete, category, tags) {}

/**
 * 특정 할 일의 특정 태그 수정
 * @param {number} id 아이디
 * @param {string[]} tags 관련 태그들
 */
function onChangeTagsById(id, tags) {}

/**
 * ID를 기반으로 특정 할 일 삭제
 * @param {number} id 아이디
 */
function onRemoveTodoListById(id) {}

/**
 * 모든 할 일 제거
 */
function onRemoveAllTodoList() {}

/**
 * 특정 할 일의 특정 태그 삭제
 * tags가 빈 배열로 들어온다면 모든 태그 삭제
 * @param {number} id 아이디
 * @param {string[]} tags 태그들
 */
function onRemoveTagsById(id, tags) {}