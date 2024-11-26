const fs = require("fs");
const readline = require("readline");
const { MinPriorityQueue } = require("@datastructures-js/priority-queue"); // 需要安装: npm install @datastructures-js/priority-queue

/**
 * 合并多个有序文件到一个大文件
 * @param {string[]} inputFiles - 输入文件路径数组
 * @param {string} outputFile - 输出文件路径
 */
async function mergeFiles(inputFiles, outputFile) {
  // 打开每个输入文件的流
  const fileStreams = inputFiles.map((file) =>
    readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    })
  );

  // 优先队列，每个元素为 { value, fileIndex }
  const heap = new MinPriorityQueue({
    priority: (element) => element.value, // 按 value 排序
  });

  // 初始化堆：从每个文件中读取第一个字符串
  for (let i = 0; i < fileStreams.length; i++) {
    const line = await readNextLine(fileStreams[i]);
    if (line !== null) {
      heap.enqueue({ value: line, fileIndex: i });
    }
  }

  // 打开输出文件的写入流
  const writeStream = fs.createWriteStream(outputFile);

  // 处理优先队列
  while (!heap.isEmpty()) {
    // 取出堆顶元素
    const { value, fileIndex } = heap.dequeue();

    // 写入到输出文件
    writeStream.write(value + "\n");

    // 从对应文件读取下一行，加入堆中
    const nextLine = await readNextLine(fileStreams[fileIndex]);
    if (nextLine !== null) {
      heap.enqueue({ value: nextLine, fileIndex });
    }
  }

  // 关闭文件流
  for (const stream of fileStreams) {
    stream.close();
  }
  writeStream.end();
}

/**
 * 读取文件的下一行
 * @param {readline.Interface} fileStream - 文件的 readline 接口
 * @returns {Promise<string|null>} - 返回下一行或 null（如果 EOF）
 */
function readNextLine(fileStream) {
  return new Promise((resolve) => {
    fileStream.once("line", (line) => resolve(line));
    fileStream.once("close", () => resolve(null));
  });
}
n(
  // 示例调用
  async () => {
    const inputFiles = Array.from(
      { length: 100 },
      (_, i) => `file${i + 1}.txt`
    ); // 假设输入文件为 file1.txt ~ file100.txt
    const outputFile = "mergedFile.txt";

    console.log("Starting merge...");
    await mergeFiles(inputFiles, outputFile);
    console.log("Merge completed!");
  }
)();
