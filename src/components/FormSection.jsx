import { useState } from 'react';

const FormSection = ({ data, onChange }) => {
  const updateField = (path, value) => {
    const newData = { ...data };
    const keys = path.split('.');
    let current = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    onChange(newData);
  };

  const addItem = (arrayPath, defaultItem) => {
    const newData = { ...data };
    const keys = arrayPath.split('.');
    let current = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    const array = current[keys[keys.length - 1]] || [];
    current[keys[keys.length - 1]] = [...array, defaultItem];
    onChange(newData);
  };

  const removeItem = (arrayPath, index) => {
    const newData = { ...data };
    const keys = arrayPath.split('.');
    let current = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    const array = current[keys[keys.length - 1]];
    array.splice(index, 1);
    onChange(newData);
  };

  const updateArrayItem = (arrayPath, index, field, value) => {
    const newData = { ...data };
    const keys = arrayPath.split('.');
    let current = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]][index][field] = value;
    onChange(newData);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">✏️ Edit Your README</h2>
        <p className="text-gray-600">Fill in the fields below to generate your custom README file</p>
      </div>

      {/* Basic Information */}
      <section className="space-y-4 border-b pb-6">
        <h3 className="text-lg font-semibold text-gray-700">📋 Basic Information</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Name *</label>
          <input
            type="text"
            value={data.projectName || ''}
            onChange={(e) => updateField('projectName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="My Awesome Project"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
            <input
              type="text"
              value={data.emoji || ''}
              onChange={(e) => updateField('emoji', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="🚀"
            />
          </div>
          <div className="flex flex-col justify-end space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={data.centered || false}
                onChange={(e) => updateField('centered', e.target.checked)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-700">Center Header</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={data.quickLinks || false}
                onChange={(e) => updateField('quickLinks', e.target.checked)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-700">Include Quick Links</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
          <input
            type="text"
            value={data.subtitle || ''}
            onChange={(e) => updateField('subtitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="A modern web application"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={data.description || ''}
            onChange={(e) => updateField('description', e.target.value)}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="A comprehensive description of your project..."
          />
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4 border-b pb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">🏷️ Badges</h3>
          <button
            onClick={() => addItem('badges', { name: '', value: '', color: 'blue', logo: '', link: '#' })}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            + Add Badge
          </button>
        </div>

        {data.badges && data.badges.map((badge, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-700">Badge {index + 1}</span>
              <button
                onClick={() => removeItem('badges', index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={badge.name || ''}
                onChange={(e) => updateArrayItem('badges', index, 'name', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Badge Name"
              />
              <input
                type="text"
                value={badge.value || ''}
                onChange={(e) => updateArrayItem('badges', index, 'value', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Value"
              />
              <input
                type="text"
                value={badge.color || ''}
                onChange={(e) => updateArrayItem('badges', index, 'color', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Color (e.g., blue)"
              />
              <input
                type="text"
                value={badge.logo || ''}
                onChange={(e) => updateArrayItem('badges', index, 'logo', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Logo name"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Screenshots */}
      <section className="space-y-4 border-b pb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">📱 Screenshots</h3>
          <button
            onClick={() => addItem('screenshots', { title: '', url: '', description: '' })}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            + Add Screenshot
          </button>
        </div>

        {data.screenshots && data.screenshots.map((screenshot, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-700">Screenshot {index + 1}</span>
              <button
                onClick={() => removeItem('screenshots', index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <input
              type="text"
              value={screenshot.title || ''}
              onChange={(e) => updateArrayItem('screenshots', index, 'title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Title"
            />
            <input
              type="text"
              value={screenshot.url || ''}
              onChange={(e) => updateArrayItem('screenshots', index, 'url', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Image URL or path"
            />
            <input
              type="text"
              value={screenshot.description || ''}
              onChange={(e) => updateArrayItem('screenshots', index, 'description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Description"
            />
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="space-y-4 border-b pb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">✨ Features</h3>
          <button
            onClick={() => addItem('features', { emoji: '🎯', title: '', items: [] })}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            + Add Feature Group
          </button>
        </div>

        {data.features && data.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-700">Feature Group {featureIndex + 1}</span>
              <button
                onClick={() => removeItem('features', featureIndex)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <input
                type="text"
                value={feature.emoji || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.features[featureIndex].emoji = e.target.value;
                  onChange(newData);
                }}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="🎯"
              />
              <input
                type="text"
                value={feature.title || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.features[featureIndex].title = e.target.value;
                  onChange(newData);
                }}
                className="col-span-3 px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Feature Group Title"
              />
            </div>

            <div className="ml-4 space-y-2">
              <button
                onClick={() => {
                  const newData = { ...data };
                  if (!newData.features[featureIndex].items) {
                    newData.features[featureIndex].items = [];
                  }
                  newData.features[featureIndex].items.push({ title: '', description: '' });
                  onChange(newData);
                }}
                className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs"
              >
                + Add Feature Item
              </button>

              {feature.items && feature.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-3 bg-white rounded border border-gray-200 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-gray-600">Item {itemIndex + 1}</span>
                    <button
                      onClick={() => {
                        const newData = { ...data };
                        newData.features[featureIndex].items.splice(itemIndex, 1);
                        onChange(newData);
                      }}
                      className="text-red-600 hover:text-red-800 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    value={item.title || ''}
                    onChange={(e) => {
                      const newData = { ...data };
                      newData.features[featureIndex].items[itemIndex].title = e.target.value;
                      onChange(newData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
                    placeholder="Feature Title"
                  />
                  <input
                    type="text"
                    value={item.description || ''}
                    onChange={(e) => {
                      const newData = { ...data };
                      newData.features[featureIndex].items[itemIndex].description = e.target.value;
                      onChange(newData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
                    placeholder="Feature Description"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section className="space-y-4 border-b pb-6">
        <h3 className="text-lg font-semibold text-gray-700">🛠️ Tech Stack</h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Core Technologies</label>
            <button
              onClick={() => {
                const newData = { ...data };
                if (!newData.techStack) newData.techStack = {};
                if (!newData.techStack.core) newData.techStack.core = [];
                newData.techStack.core.push({ category: '', value: '' });
                onChange(newData);
              }}
              className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs"
            >
              + Add Tech
            </button>
          </div>

          {data.techStack?.core && data.techStack.core.map((tech, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-700">Tech {index + 1}</span>
                <button
                  onClick={() => {
                    const newData = { ...data };
                    newData.techStack.core.splice(index, 1);
                    onChange(newData);
                  }}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={tech.category || ''}
                  onChange={(e) => {
                    const newData = { ...data };
                    newData.techStack.core[index].category = e.target.value;
                    onChange(newData);
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Category (e.g., Language)"
                />
                <input
                  type="text"
                  value={tech.value || ''}
                  onChange={(e) => {
                    const newData = { ...data };
                    newData.techStack.core[index].value = e.target.value;
                    onChange(newData);
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Technology (e.g., JavaScript)"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Libraries & Frameworks</label>
            <button
              onClick={() => {
                const newData = { ...data };
                if (!newData.techStack) newData.techStack = {};
                if (!newData.techStack.libraries) newData.techStack.libraries = [];
                newData.techStack.libraries.push({ category: '', items: [] });
                onChange(newData);
              }}
              className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs"
            >
              + Add Library Category
            </button>
          </div>

          {data.techStack?.libraries && data.techStack.libraries.map((lib, libIndex) => (
            <div key={libIndex} className="p-3 bg-gray-50 rounded-lg space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-gray-700">Library Category {libIndex + 1}</span>
                <button
                  onClick={() => {
                    const newData = { ...data };
                    newData.techStack.libraries.splice(libIndex, 1);
                    onChange(newData);
                  }}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                value={lib.category || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.techStack.libraries[libIndex].category = e.target.value;
                  onChange(newData);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Category (e.g., UI Libraries)"
              />

              <div className="ml-4 space-y-2">
                <button
                  onClick={() => {
                    const newData = { ...data };
                    if (!newData.techStack.libraries[libIndex].items) {
                      newData.techStack.libraries[libIndex].items = [];
                    }
                    newData.techStack.libraries[libIndex].items.push({ name: '', description: '' });
                    onChange(newData);
                  }}
                  className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs"
                >
                  + Add Library Item
                </button>

                {lib.items && lib.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-2 bg-white rounded border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-600">Item {itemIndex + 1}</span>
                      <button
                        onClick={() => {
                          const newData = { ...data };
                          newData.techStack.libraries[libIndex].items.splice(itemIndex, 1);
                          onChange(newData);
                        }}
                        className="text-red-600 hover:text-red-800 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={item.name || ''}
                        onChange={(e) => {
                          const newData = { ...data };
                          newData.techStack.libraries[libIndex].items[itemIndex].name = e.target.value;
                          onChange(newData);
                        }}
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        value={item.description || ''}
                        onChange={(e) => {
                          const newData = { ...data };
                          newData.techStack.libraries[libIndex].items[itemIndex].description = e.target.value;
                          onChange(newData);
                        }}
                        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-4 border-b pb-6">
        <h3 className="text-lg font-semibold text-gray-700">🚀 Installation</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prerequisites</label>
          <textarea
            value={data.installation?.prerequisites || ''}
            onChange={(e) => {
              const newData = { ...data };
              if (!newData.installation) newData.installation = {};
              newData.installation.prerequisites = e.target.value;
              onChange(newData);
            }}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            placeholder="List prerequisites here..."
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">Installation Steps</label>
            <button
              onClick={() => {
                const newData = { ...data };
                if (!newData.installation) newData.installation = {};
                if (!newData.installation.steps) newData.installation.steps = [];
                newData.installation.steps.push({ title: '', code: '', description: '' });
                onChange(newData);
              }}
              className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs"
            >
              + Add Step
            </button>
          </div>

          {data.installation?.steps && data.installation.steps.map((step, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-gray-700">Step {index + 1}</span>
                <button
                  onClick={() => {
                    const newData = { ...data };
                    newData.installation.steps.splice(index, 1);
                    onChange(newData);
                  }}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                value={step.title || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.installation.steps[index].title = e.target.value;
                  onChange(newData);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Step Title"
              />
              <textarea
                value={step.code || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.installation.steps[index].code = e.target.value;
                  onChange(newData);
                }}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
                placeholder="Command(s) to run..."
              />
            </div>
          ))}
        </div>
      </section>

      {/* API Endpoints */}
      <section className="space-y-4 border-b pb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">🌐 API Endpoints</h3>
          <button
            onClick={() => {
              const newData = { ...data };
              if (!newData.api) newData.api = {};
              if (!newData.api.endpoints) newData.api.endpoints = [];
              newData.api.endpoints.push({ method: 'GET', path: '', description: '' });
              onChange(newData);
            }}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            + Add Endpoint
          </button>
        </div>

        {data.api?.endpoints && data.api.endpoints.map((endpoint, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-700">Endpoint {index + 1}</span>
              <button
                onClick={() => {
                  const newData = { ...data };
                  newData.api.endpoints.splice(index, 1);
                  onChange(newData);
                }}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={endpoint.method || 'GET'}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.api.endpoints[index].method = e.target.value;
                  onChange(newData);
                }}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
              </select>
              <input
                type="text"
                value={endpoint.path || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.api.endpoints[index].path = e.target.value;
                  onChange(newData);
                }}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="/api/endpoint"
              />
              <input
                type="text"
                value={endpoint.description || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  newData.api.endpoints[index].description = e.target.value;
                  onChange(newData);
                }}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Description"
              />
            </div>
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sample API Response (JSON)</label>
          <textarea
            value={data.api?.sampleResponse || ''}
            onChange={(e) => {
              const newData = { ...data };
              if (!newData.api) newData.api = {};
              newData.api.sampleResponse = e.target.value;
              onChange(newData);
            }}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
            placeholder='{\n  "id": "1",\n  "status": "success"\n}'
          />
        </div>
      </section>

      {/* License */}
      <section className="space-y-4 border-b pb-6">
        <h3 className="text-lg font-semibold text-gray-700">📄 License</h3>
        <select
          value={data.license || 'MIT'}
          onChange={(e) => updateField('license', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="MIT">MIT License</option>
          <option value="Apache-2.0">Apache License 2.0</option>
          <option value="GPL-3.0">GNU GPL v3.0</option>
          <option value="BSD-3-Clause">BSD 3-Clause License</option>
          <option value="ISC">ISC License</option>
          <option value="">None</option>
        </select>
      </section>

      {/* Footer Options */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">🎨 Footer Options</h3>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={data.footer?.enabled || false}
            onChange={(e) => {
              const newData = { ...data };
              if (!newData.footer) newData.footer = {};
              newData.footer.enabled = e.target.checked;
              onChange(newData);
            }}
            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="text-sm font-medium text-gray-700">Include Footer</span>
        </label>

        {data.footer?.enabled && (
          <div className="space-y-3 ml-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Footer Title</label>
              <input
                type="text"
                value={data.footer?.title || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  if (!newData.footer) newData.footer = { enabled: true };
                  newData.footer.title = e.target.value;
                  onChange(newData);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="⭐ Star this repository if you found it helpful!"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Footer Message</label>
              <input
                type="text"
                value={data.footer?.message || ''}
                onChange={(e) => {
                  const newData = { ...data };
                  if (!newData.footer) newData.footer = { enabled: true };
                  newData.footer.message = e.target.value;
                  onChange(newData);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Made with ❤️"
              />
            </div>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={data.footer?.centered !== false}
                onChange={(e) => {
                  const newData = { ...data };
                  if (!newData.footer) newData.footer = { enabled: true };
                  newData.footer.centered = e.target.checked;
                  onChange(newData);
                }}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-700">Center Footer</span>
            </label>
          </div>
        )}
      </section>
    </div>
  );
};

export default FormSection;
