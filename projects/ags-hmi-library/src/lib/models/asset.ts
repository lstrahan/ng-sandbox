/*-----------------------------------------------------------------------------
*  The Boeing Company
*
*  Copyright (c) 2017 The Boeing Company  All rights reserved.
*----------------------------------------------------------------------------*/
export class Asset {
  assetId: string;
  bandWidth: string;
  hkDuration: string;
  hkPeriod: string;
  lastHkTime: string;
  lastMaintTime: string;
  maintDuration: string;
  mainPeriod: string;
  maxTotalTasks: number;
  numChannels: number;
  priority: number;

  constructor(json: any) {
    this.assetId = json.asset_ID;
    this.bandWidth = json.bandwidth;
    this.hkDuration = json.hk_duration;
    this.hkPeriod = json.hk_period;
    this.lastHkTime = json.last_hk_time;
    this.lastMaintTime = json.last_maint_time;
    this.maintDuration = json.maint_duration;
    this.mainPeriod = json.maint_period;
    this.maxTotalTasks = json.max_total_tasks;
    this.numChannels = json.num_channels;
    this.priority = json.priority;
  }
}

export class AssetList {
  items: Array<Asset> = [];

  constructor(json?: any) {
    if (json != null) {
      this.fromJson(json);
    }
  }
  fromJson(json: any) {
    json = json.assets;
    for (let i = 0; i < json.length; i++) {
      this.items.push(new Asset(json[i]));
    }
  }

  getAssetById(assetId: string): Asset {
    const assets = this.items.filter(asset => asset.assetId === assetId);
    if (assets.length > 0) {
      return assets[0];
    } else {
      return null;
    }
  }

  getAssetsByCapabilityId(capabilityId: string): Asset[] {
    // return a list of Assets that contain capabilityId
    return this.items;
  }

  getAssetsByEntityId(entityId: string): Asset[] {
    // return a list of Assets that contain entityId
    return this.items;
  }

  getAssetCapabilities(assetId: string): string[] {
    // let list: string[];
    // return list;
    return [];
  }

  toString(): string {
    let str = "";
    this.items.forEach((value: Asset, index: number, array: Asset[]) => {
      str += value.toString() + "; ";
    });
    return str;
  }
}

export class Schedule {
  assetId: string;
  approvalStatus: string;
  eventType: string;
  isPrimary: string;
  schedId: string;
  startTime: string;
  stopTime: string;
  targetId: string;
  taskId: string;
  windowId: string;

  constructor(json: any) {
    this.assetId = json.asset_ID;
    this.approvalStatus = json.approval_status;
    this.eventType = json.event_type;
    this.isPrimary = json.is_primary;
    this.schedId = json.sched_ID;
    this.startTime = json.start_time;
    this.stopTime = json.stop_time;
    this.targetId = json.target_ID;
    this.taskId = json.task_ID;
    this.windowId = json.window_ID;
  }
}

export class ScheduleList {
  items: Array<Schedule> = [];

  constructor(json?: any) {
    if (json != null) {
      this.fromJson(json);
    }
  }
  fromJson(json: any) {
    json = json.schedule;
    for (let i = 0; i < json.length; i++) {
      this.items.push(new Schedule(json[i]));
    }
  }

  getAssetById(assetId: string): Schedule {
    const assets = this.items.filter(asset => asset.assetId === assetId);
    if (assets.length > 0) {
      return assets[0];
    } else {
      return null;
    }
  }

  getAssetsByCapabilityId(capabilityId: string): Schedule[] {
    // return a list of Assets that contain capabilityId
    return this.items;
  }

  getAssetsByEntityId(entityId: string): Schedule[] {
    // return a list of Assets that contain entityId
    return this.items;
  }

  getAssetCapabilities(assetId: string): string[] {
    // let list: string[];
    // return list;
    return [];
  }

  toString(): string {
    let str = "";
    this.items.forEach((value: Schedule, index: number, array: Schedule[]) => {
      str += value.toString() + "; ";
    });
    return str;
  }
}
