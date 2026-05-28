// app/background/codeSnippets.ts

const LANGUAGES = ['cpp', 'go', 'rust', 'dart', 'python', 'js', 'sql', 'java']

const COMPONENT_NAMES = ['yugnex', 'engine', 'cortex', 'substrate', 'ast', 'parser', 'reasoner', 'db', 'socket', 'threadPool', 'cache', 'security']
const VARIABLE_NAMES = ['ptr', 'buffer', 'astNode', 'channel', 'mutex', 'payload', 'state', 'config', 'stream', 'invariants', 'contextTree', 'graph']
const METHOD_NAMES = ['resolve', 'validate', 'compile', 'refactor', 'execute', 'free', 'allocate', 'lock', 'unlock', 'unwrap', 'match', 'dispatch', 'trace']

const CPP_TEMPLATES = [
  'void* {var} = malloc({num} * sizeof(char));',
  'if (!{var}) throw std::runtime_error("Out of memory");',
  'std::unique_ptr<Node> {var} = std::make_unique<Node>({num});',
  '{comp}.{method}(reinterpret_cast<void*>({var}));',
  'delete[] {var}; // prevent memory leak',
  'const auto {var} = {comp}->{method}();',
  '#define {var}_SIZE {num}',
  'for (int i = 0; i < {num}; ++i) {var}[i]->{method}();',
]

const GO_TEMPLATES = [
  'go func() { {comp}.{method}({var}) }()',
  'select { case <-{var}: return; default: break; }',
  'err := {comp}.{method}(ctx, &{var})',
  '{var} := make(chan string, {num})',
  'defer {var}.Close()',
  'if err != nil { log.Fatalf("FATAL: %v", err) }',
  'mu.Lock(); {var} = true; mu.Unlock()',
]

const RUST_TEMPLATES = [
  'let mut {var} = {comp}.{method}().unwrap();',
  'match {var} { Ok(val) => val, Err(_) => panic!("bounds check fail") }',
  'let {var}: Vec<u8> = Vec::with_capacity({num});',
  'impl {comp} for Node { fn {method}(&self) -> Result<(), Error> }',
  '{var}.as_ref().expect("null pointer exception avoided")',
  'unsafe { std::ptr::copy_nonoverlapping(src, dest, {num}) }',
]

const DART_TEMPLATES = [
  'final {var} = StreamController<String>.broadcast();',
  'Widget build(BuildContext context) { return Container(padding: const EdgeInsets.all({num})); }',
  'await {comp}.{method}().then((val) => setState(() => {var} = val));',
  'Future<void> {method}() async { await Future.delayed(Duration(milliseconds: {num})); }',
  'class {comp}Widget extends StatefulWidget { const {comp}Widget({Key? key}) : super(key: key); }',
]

const PYTHON_TEMPLATES = [
  'self.{var} = np.zeros(({num}, {num}))',
  '{var} = [{comp}.{method}(x) for x in range({num}) if x % 2 == 0]',
  'model.add(layers.Dense({num}, activation="relu", name="{var}"))',
  'with open(filepath, "r") as {var}: data = json.load({var})',
  '@dataclass\nclass {comp}Config: id: str; capacity: int = {num}',
]

const JS_TEMPLATES = [
  'const [{var}, set{var}] = useState(() => {comp}.{method}());',
  'useEffect(() => { const timer = setTimeout({method}, {num}); return () => clearTimeout(timer); }, []);',
  'export default async function {comp}Page({ params }) { const {var} = await params; }',
  'const {var} = await fetch("/api/admin/{comp}").then(r => r.json());',
  'import { {method} } from "@/app/lib/{comp}";',
]

const SQL_TEMPLATES = [
  'SELECT {var}_id, COUNT(*) FROM {comp} GROUP BY {var}_id HAVING COUNT(*) > {num};',
  'INSERT INTO {comp} ({var}_name, created_at) VALUES (\'dynamic_node\', NOW());',
  'UPDATE {comp} SET {var}_status = \'active\' WHERE {var}_id = {num};',
  'CREATE INDEX idx_{comp}_{var} ON {comp}({var}_id);',
]

const STATUS_TEMPLATES = [
  '200 OK SUCCESS - {comp}.{method} executed in {num}ms',
  '404 NOT FOUND - route /api/admin/{comp}/{var} unresolved',
  '500 INTERNAL SERVER ERROR - db connection pool exhausted ({num}/100)',
  '[YUGNEX SOLUTION] Auto-intercepted AST memory leak on {var}',
]

export function generateDynamicCodeSnippet(): string {
  const lang = LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)]
  let templates = JS_TEMPLATES
  
  if (lang === 'cpp') templates = CPP_TEMPLATES
  else if (lang === 'go') templates = GO_TEMPLATES
  else if (lang === 'rust') templates = RUST_TEMPLATES
  else if (lang === 'dart') templates = DART_TEMPLATES
  else if (lang === 'python') templates = PYTHON_TEMPLATES
  else if (lang === 'sql') templates = SQL_TEMPLATES
  else if (Math.random() < 0.15) templates = STATUS_TEMPLATES // Mix in server status logs
  
  const template = templates[Math.floor(Math.random() * templates.length)]
  
  const randComp = COMPONENT_NAMES[Math.floor(Math.random() * COMPONENT_NAMES.length)]
  const randVar = VARIABLE_NAMES[Math.floor(Math.random() * VARIABLE_NAMES.length)]
  const randMethod = METHOD_NAMES[Math.floor(Math.random() * METHOD_NAMES.length)]
  const randNum = Math.floor(Math.random() * 980) + 20
  
  let snippet = template
    .replace(/{comp}/g, randComp)
    .replace(/{var}/g, randVar)
    .replace(/{method}/g, randMethod)
    .replace(/{num}/g, randNum.toString())
    
  // Capitalize the first letter of variable for capitalized replacements like set{var}
  const capVar = randVar.charAt(0).toUpperCase() + randVar.slice(1)
  snippet = snippet.replace(/{Var}/g, capVar)
  
  return snippet
}
