# 通常够用的API调用的简要介绍

---



# NAI接口文档

## 📋 接口概览

**请求方式：**  `POST`
**请求地址：**  `/v1/images/generations`
**完整 URL：**  `https://rinkoai.com/v1/images/generations`

## 🔐 请求头 (Headers)


| 参数            | 类型   | 必填 | 说明                  |
| ----------------- | -------- | ------ | ----------------------- |
| `Content-Type`  | string | ✅   | `application/json`    |
| `Authorization` | string | ✅   | `Bearer YOUR_API_KEY` |

## 📝 请求参数 (Body)

### 最简请求示例

```json
{
    "model": "nai-diffusion-4-5-full",
    "prompt": "1 girl",
    "size": "1024x1024"
}
```

### 完整参数列表


| 参数                  | 类型    | 必填 | 默认值             | 说明                                               |
| ----------------------- | --------- | ------ | -------------------- | ---------------------------------------------------- |
| `model`               | string  | ✅   | -                  | 模型名称，参考 newapi 支持的模型列表               |
| `prompt`              | string  | ✅   | -                  | 图像描述提示词，仅支持英文字母、数字、英文符号     |
| `size`                | string  | ✅   | -                  | 图像尺寸，格式：`宽x高`                            |
| `style`               | string  | ❌   | `default`          | 图像风格                                           |
| `negative_prompt`     | string  | ❌   | -                  | 负面提示词，仅支持英文字母、数字、英文符号         |
| `auto_smea`           | boolean | ❌   | `false`            | 自动 SMEA 优化                                     |
| `cfg_rescale`         | number  | ❌   | `0`                | CFG 重缩放参数(Prompt Guidance Rescale)，范围：0-1 |
| `color_correct`       | boolean | ❌   | `false`            | 颜色校正                                           |
| `controlnet_strength` | number  | ❌   | `1`                | ControlNet 强度                                    |
| `noise`               | number  | ❌   | `0`                | 噪声级别                                           |
| `noise_schedule`      | string  | ❌   | `karras`           | 噪声调度算法                                       |
| `qualityToggle`       | boolean | ❌   | `true`             | 质量增强开关                                       |
| `sampler`             | string  | ❌   | `k_euler_ancestra` | 采样器类型                                         |
| `scale`               | number  | ❌   | `5.2`              | 引导缩放(Prompt Guidance)，范围：1-20              |
| `strength`            | number  | ❌   | `0.7`              | 生成强度                                           |
| `ucPreset`            | number  | ❌   | `0`                | UC预设，范围：0-4                                  |

### 参数详细说明

#### `size` 可选值

- `512x768` (20P)
- `768x512` (20P)
- `640x640` (20P)
- `1024x1024` (20P)
- `1024x1536` (20P)
- `1536x1024` (20P)
- `1024x1536` (50P)
- `1536x1024` (50P)
- `1472x1472` (62P)
- `1088x1920` (60P)
- `1920x1088` (60P)

#### `style` 可选值

- `default` - 默认
- `recommend` - 推荐风格

如果你自己调出来了好看的风格,可以发给我们 我们会给你添加一个Style!

#### `sampler` 可选值

- `k_euler` - Euler 采样器
- `k_euler_ancestral` - Euler Ancestral 采样器 (最推荐)
- `k_euler_a` - Euler A 采样器
- `k_dpmpp_2s_ancestral` - DPM++ 2S Ancestral 采样器
- `k_dpmpp_2s_a` - DPM++ 2S A 采样器
- `k_dpmpp_2m_sde` - DPM++ 2M SDE 采样器
- `k_dpmpp_2m` - DPM++ 2M 采样器
- `k_dpmpp_sde` - DPM++ SDE 采样器

#### `noise_schedule` 可选值

- `karras` - Karras 调度(最推荐)
- `native` - Native 调度
- `exponential` - exponential 调度
- `polyexponential` - polyexponential 调度

## 🎨 v4模型Character参数使用说明

对于v4模型，可以使用character参数来精确控制多个角色的生成。在请求body中添加以下字段：

### Character参数结构

```json
{
    "characterPrompts": [
        {
            "prompt": "CHARACTER_PROMPT_1",
            "uc": "CHARACTER_NEGATIVE_PROMPT_1",
            "center": {
                "x": 0,
                "y": 0
            },
            "enabled": true
        }
    ],
    "v4_prompt": {
        "caption": {
            "base_caption": "PROMPT",
            "char_captions": [
                {
                    "char_caption": "CHARACTER_PROMPT_1",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                }
            ]
        },
        "use_coords": false,
        "use_order": true
    },
    "v4_negative_prompt": {
        "caption": {
            "base_caption": "NEGATIVE_PROMPT",
            "char_captions": [
                {
                    "char_caption": "CHARACTER_NEGATIVE_PROMPT_1",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                }
            ]
        },
        "legacy_uc": false
    }
}
```

### Character参数说明

- **可添加角色数量**：0-6个character
- **PROMPT内容**：与`prompt`字段值相同
- **NEGATIVE_PROMPT内容**：与`negative_prompt`字段值相同
- **每个character**：都有各自的正面和负面提示词

### 完整Character示例

```json
{
    "model": "nai-diffusion-4-5-full",
    "prompt": "3girls, green background, full body, very aesthetic, masterpiece, no text",
    "negative_prompt": "nsfw, lowres, artistic error, film grain, scan artifacts, worst quality, bad quality, jpeg artifacts, very displeasing, chromatic aberration, dithering, halftone, screentone, multiple views, logo, too many watermarks, negative space, blank page",
    "size": "1024x1024",
    "characterPrompts": [
        {
            "prompt": "girl, small breasts, purple hawaiian shirt, sphere earrings",
            "uc": "lowres, aliasing",
            "center": {
                "x": 0,
                "y": 0
            },
            "enabled": true
        },
        {
            "prompt": "girl, short hair, pink chest sarashi, collar",
            "uc": "lowres, aliasing",
            "center": {
                "x": 0,
                "y": 0
            },
            "enabled": true
        },
        {
            "prompt": "girl, pink eyes, curtain grab",
            "uc": "lowres, aliasing",
            "center": {
                "x": 0,
                "y": 0
            },
            "enabled": true
        }
    ],
    "v4_prompt": {
        "caption": {
            "base_caption": "3girls, green background, full body, very aesthetic, masterpiece, no text",
            "char_captions": [
                {
                    "char_caption": "girl, small breasts, purple hawaiian shirt, sphere earrings",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                },
                {
                    "char_caption": "girl, short hair, pink chest sarashi, collar",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                },
                {
                    "char_caption": "girl, pink eyes, curtain grab",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                }
            ]
        },
        "use_coords": false,
        "use_order": true
    },
    "v4_negative_prompt": {
        "caption": {
            "base_caption": "nsfw, lowres, artistic error, film grain, scan artifacts, worst quality, bad quality, jpeg artifacts, very displeasing, chromatic aberration, dithering, halftone, screentone, multiple views, logo, too many watermarks, negative space, blank page",
            "char_captions": [
                {
                    "char_caption": "lowres, aliasing",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                },
                {
                    "char_caption": "lowres, aliasing",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                },
                {
                    "char_caption": "lowres, aliasing",
                    "centers": [
                        {
                            "x": 0,
                            "y": 0
                        }
                    ]
                }
            ]
        },
        "legacy_uc": false
    }
}
```

## 📤 响应格式

### 成功响应

#### Base64 格式响应

```json
{
    "data": [
        {
            "b64_json": "UEsDBBQACA..."
        }
    ],
    "created": 1756521472
}
```

#### URL 格式响应

```json
{
    "data": [
        {
            "url": "https://tuerchaimg.pages.dev/file/1756521573995_image_1756521568803.png"
        }
    ],
    "created": 1756521573
}
```

### 错误响应

```json
{
    "error": {
        "message": "错误描述",
        "type": "invalid_request_error",
        "code": "invalid_parameter"
    }
}
```

## 🔧 使用示例

### cURL 示例

```bash
curl -X POST "https://rinkoai.com/v1/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "nai-diffusion-4-5-full",
    "prompt": "a beautiful landscape with mountains and lake",
    "size": "1024x1024",
    "style": "realistic",
    "negative_prompt": "blurry, low quality",
    "scale": 7,
    "sampler": "k_euler"
  }'
```

### JavaScript 示例

```js
const response = await fetch('https://rinkoai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'nai-diffusion-4-5-full',
    prompt: 'a cute cat sitting on a chair',
    size: '1024x1024',
    style: 'anime'
  })
});

const result = await response.json();
console.log(result);
```

### Python 示例

```python
import requests
import json

url = "https://rinkoai.com/v1/images/generations"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}

data = {
    "model": "nai-diffusion-4-5-full",
    "prompt": "a futuristic city at sunset",
    "size": "1024x1024",
    "style": "artistic",
    "scale": 6
}

response = requests.post(url, headers=headers, data=json.dumps(data))
result = response.json()
print(result)
```

## ⚠️ 注意事项

> **重要提示**
>
> - `prompt` 和 `negative_prompt` 仅支持英文字母、数字和英文符号
> - 图像生成可能需要较长时间，请耐心等待
> - 生成的图像可能包含随机性，相同参数可能产生不同结果
> - 请遵守相关法律法规，不要生成违法违规内容

## 📊 状态码说明


| 状态码 | 说明                 |
| -------- | ---------------------- |
| `200`  | 请求成功             |
| `400`  | 请求参数错误         |
| `401`  | API Key 无效或未提供 |
| `429`  | 请求频率超限         |
| `500`  | 服务器内部错误       |

---

*如有疑问，请参考* *[RinkoAI 官方文档](https://rinkoai.com)* *或联系技术支持。*  🎨
